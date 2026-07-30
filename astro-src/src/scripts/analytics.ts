type AnalyticsEventName = "page_view" | "whatsapp_click";

type AnalyticsProperties = {
  source?: string;
  label?: string;
};

type VisitorRecord = {
  id: string;
  createdAt: number;
};

const ENDPOINT = "/api/analytics";
const VISITOR_KEY = "soluciones_analytics_visitor";
const SESSION_KEY = "soluciones_analytics_session";
const VISITOR_TTL_MS = 180 * 24 * 60 * 60 * 1000;
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function privacyOptOut(): boolean {
  const nav = navigator as Navigator & {
    globalPrivacyControl?: boolean;
    doNotTrack?: string | null;
  };
  return nav.globalPrivacyControl === true || nav.doNotTrack === "1";
}

function randomId(): string {
  return crypto.randomUUID();
}

function visitorId(): string {
  try {
    const stored = localStorage.getItem(VISITOR_KEY);
    if (stored) {
      const record = JSON.parse(stored) as Partial<VisitorRecord>;
      if (
        typeof record.id === "string" &&
        UUID_PATTERN.test(record.id) &&
        typeof record.createdAt === "number" &&
        Date.now() - record.createdAt < VISITOR_TTL_MS
      ) {
        return record.id;
      }
    }

    const record: VisitorRecord = { id: randomId(), createdAt: Date.now() };
    localStorage.setItem(VISITOR_KEY, JSON.stringify(record));
    return record.id;
  } catch {
    return randomId();
  }
}

function sessionId(): string {
  try {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored && UUID_PATTERN.test(stored)) return stored;
    const id = randomId();
    sessionStorage.setItem(SESSION_KEY, id);
    return id;
  } catch {
    return randomId();
  }
}

function clean(value: string | undefined, maxLength: number): string | undefined {
  const result = value?.replace(/\s+/g, " ").trim().slice(0, maxLength);
  return result || undefined;
}

function send(eventName: AnalyticsEventName, properties: AnalyticsProperties = {}): void {
  if (privacyOptOut()) return;

  const payload = JSON.stringify({
    event_id: randomId(),
    visitor_id: visitorId(),
    session_id: sessionId(),
    event_name: eventName,
    page_path: window.location.pathname,
    properties: {
      source: clean(properties.source, 80),
      label: clean(properties.label, 120),
    },
  });

  if (navigator.sendBeacon) {
    const accepted = navigator.sendBeacon(
      ENDPOINT,
      new Blob([payload], { type: "application/json" })
    );
    if (accepted) return;
  }

  void fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
    credentials: "same-origin",
  }).catch(() => undefined);
}

function whatsappSource(link: HTMLAnchorElement): string {
  const explicit = link.dataset.analyticsSource;
  if (explicit) return explicit;
  if (link.closest("header")) return "header";
  if (link.closest("footer")) return "footer";
  return link.closest<HTMLElement>("section[id]")?.id || "floating_button";
}

export function trackWhatsapp(source: string, label?: string): void {
  send("whatsapp_click", { source, label });
}

export function initAnalytics(): void {
  if (document.documentElement.dataset.analyticsReady === "true") return;
  document.documentElement.dataset.analyticsReady = "true";

  send("page_view");

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>(
        'a[href*="wa.me/"], a[href*="api.whatsapp.com/"]'
      );
      if (!link) return;
      trackWhatsapp(
        whatsappSource(link),
        link.getAttribute("aria-label") || link.textContent || "WhatsApp"
      );
    },
    { capture: true }
  );
}
