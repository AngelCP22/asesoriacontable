const MAX_BODY_BYTES = 4096;
const RETENTION_DAYS = 180;
const EVENT_NAMES = new Set(["page_view", "whatsapp_click"]);

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function cleanText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function validUuid(value) {
  const candidate = cleanText(value, 36);
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    candidate
  )
    ? candidate
    : "";
}

function validSiteHost(hostname) {
  return (
    hostname === "solucionestacontable.com" ||
    hostname === "www.solucionestacontable.com" ||
    hostname === "solucionestacontable.pages.dev" ||
    hostname.endsWith(".solucionestacontable.pages.dev")
  );
}

function isAllowedRequest(request) {
  const target = new URL(request.url);
  if (target.protocol !== "https:" || !validSiteHost(target.hostname)) return false;
  if (request.headers.get("Sec-Fetch-Site") === "cross-site") return false;

  const origin = request.headers.get("Origin");
  if (!origin) return true;
  try {
    const parsed = new URL(origin);
    return parsed.protocol === "https:" && validSiteHost(parsed.hostname);
  } catch {
    return false;
  }
}

async function readBoundedJson(request) {
  const declared = Number(request.headers.get("Content-Length") || 0);
  if (declared > MAX_BODY_BYTES) throw new Error("payload_too_large");
  if (!request.body) throw new Error("empty_body");

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let result = "";
  let total = 0;

  while (true) {
    const chunk = await reader.read();
    if (chunk.done) break;
    total += chunk.value.byteLength;
    if (total > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error("payload_too_large");
    }
    result += decoder.decode(chunk.value, { stream: true });
  }
  result += decoder.decode();

  try {
    return JSON.parse(result);
  } catch {
    throw new Error("invalid_json");
  }
}

function browserName(userAgent, isBot) {
  if (isBot) return "Bot";
  if (/Edg\//i.test(userAgent)) return "Edge";
  if (/OPR\/|Opera/i.test(userAgent)) return "Opera";
  if (/SamsungBrowser/i.test(userAgent)) return "Samsung Internet";
  if (/Firefox\/|FxiOS\//i.test(userAgent)) return "Firefox";
  if (/Chrome\/|CriOS\//i.test(userAgent)) return "Chrome";
  if (/Safari\//i.test(userAgent) && /Version\//i.test(userAgent)) return "Safari";
  return "Otro";
}

export function onRequestGet() {
  return json({ error: "method_not_allowed" }, 405);
}

export async function onRequestPost(context) {
  const { request } = context;
  if (!isAllowedRequest(request)) return json({ error: "forbidden" }, 403);
  if (!context.env.ANALYTICS_DB) return json({ error: "analytics_unavailable" }, 503);

  let body;
  try {
    body = await readBoundedJson(request);
  } catch (error) {
    const message = error instanceof Error ? error.message : "invalid_body";
    return json(
      { error: message },
      message === "payload_too_large" ? 413 : 400
    );
  }

  if (!body || typeof body !== "object") return json({ error: "invalid_body" }, 400);

  const eventId = validUuid(body.event_id);
  const visitorId = validUuid(body.visitor_id);
  const sessionId = validUuid(body.session_id);
  const eventName = cleanText(body.event_name, 40);
  const pagePath = cleanText(body.page_path, 240);
  if (
    !eventId ||
    !visitorId ||
    !sessionId ||
    !EVENT_NAMES.has(eventName) ||
    !pagePath.startsWith("/")
  ) {
    return json({ error: "invalid_event" }, 400);
  }

  const properties =
    body.properties && typeof body.properties === "object" ? body.properties : {};
  const userAgent = cleanText(request.headers.get("User-Agent") || "", 500);
  let isBot =
    /bot|crawler|spider|headless|lighthouse|preview|facebookexternalhit/i.test(
      userAgent
    );
  const cf = request.cf || {};
  if (cf.botManagement?.verifiedBot === true) isBot = true;

  let country = cleanText(cf.country, 2).toUpperCase();
  if (!/^[A-Z]{2}$/.test(country)) country = "XX";

  try {
    await context.env.ANALYTICS_DB.prepare(
      `INSERT OR IGNORE INTO analytics_events
       (event_id, occurred_at, event_name, visitor_id, session_id, page_path,
        country_code, browser, source, label, is_bot)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        eventId,
        new Date().toISOString(),
        eventName,
        visitorId,
        sessionId,
        pagePath,
        country,
        browserName(userAgent, isBot),
        cleanText(properties.source, 80) || null,
        cleanText(properties.label, 120) || null,
        isBot ? 1 : 0
      )
      .run();
  } catch (error) {
    console.error(
      JSON.stringify({
        message: "analytics_insert_failed",
        event_name: eventName,
        error: error instanceof Error ? error.message : String(error),
      })
    );
    return json({ error: "storage_error" }, 500);
  }

  if (eventId.replace(/-/g, "").endsWith("0")) {
    context.waitUntil(
      context.env.ANALYTICS_DB.prepare(
        "DELETE FROM analytics_events WHERE occurred_at < strftime('%Y-%m-%dT%H:%M:%fZ', 'now', '-' || ? || ' days')"
      )
        .bind(RETENTION_DAYS)
        .run()
        .catch((error) => {
          console.error(
            JSON.stringify({
              message: "analytics_cleanup_failed",
              error: error instanceof Error ? error.message : String(error),
            })
          );
        })
    );
  }

  return json({ accepted: true }, 202);
}
