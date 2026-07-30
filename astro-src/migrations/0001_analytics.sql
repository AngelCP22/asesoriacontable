PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS analytics_events (
  event_id TEXT PRIMARY KEY,
  occurred_at TEXT NOT NULL,
  event_name TEXT NOT NULL CHECK (
    event_name IN ('page_view', 'whatsapp_click')
  ),
  visitor_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  page_path TEXT NOT NULL,
  country_code TEXT NOT NULL DEFAULT 'XX',
  browser TEXT NOT NULL DEFAULT 'Otro',
  source TEXT,
  label TEXT,
  is_bot INTEGER NOT NULL DEFAULT 0 CHECK (is_bot IN (0, 1))
) WITHOUT ROWID;

CREATE INDEX IF NOT EXISTS idx_analytics_events_time
  ON analytics_events (occurred_at);
CREATE INDEX IF NOT EXISTS idx_analytics_events_name_time
  ON analytics_events (event_name, occurred_at);
CREATE INDEX IF NOT EXISTS idx_analytics_events_visitor_time
  ON analytics_events (visitor_id, occurred_at);
CREATE INDEX IF NOT EXISTS idx_analytics_events_session_time
  ON analytics_events (session_id, occurred_at);
