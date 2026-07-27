import { TRIPS } from "../data/trips.js";
import { T } from "../theme.js";

export default function Home({ onSelect }) {
  return (
    <div style={{ background: T.BG, color: T.TEXT, minHeight: "100vh" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "48px 18px 60px" }}>
        <div style={{ fontSize: 10, letterSpacing: 5, color: T.RED, fontWeight: 700, marginBottom: 8 }}>ПЛАНИРОВЩИК ПОЕЗДОК</div>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 800, letterSpacing: -0.5 }}>🇯🇵 Япония</h1>
        <div style={{ marginTop: 6, color: T.MUTED, fontSize: 14 }}>Выберите поездку</div>

        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 14 }}>
          {TRIPS.map((trip) => (
            <button
              key={trip.key}
              onClick={() => onSelect(trip.key)}
              style={{
                textAlign: "left", cursor: "pointer", border: `1px solid ${T.BORDER}`,
                background: T.CARD, borderRadius: 16, padding: "22px 22px",
                display: "flex", alignItems: "center", gap: 18,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ fontSize: 34, flexShrink: 0 }}>{trip.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, letterSpacing: 2.5, fontWeight: 700, color: T.RED, marginBottom: 6 }}>{trip.eyebrow}</div>
                <div style={{ fontSize: 19, fontWeight: 700, color: T.TEXT }}>{trip.title}</div>
                <div style={{ marginTop: 4, fontSize: 12.5, color: T.MUTED }}>{trip.dates} · {trip.subtitle}</div>
                <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {trip.tags.map((t) => (
                    <span key={t} style={{ fontSize: 10.5, padding: "3px 9px", borderRadius: 20, background: T.CHIP, border: `1px solid ${T.BORDER}`, color: "#666" }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ color: "#ccc", fontSize: 20, flexShrink: 0 }}>→</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
