import { useState } from "react";
import { DAYS, EXTRAS } from "../data/days.js";
import { T } from "../theme.js";

export default function PlanTab({ expanded, setExpanded }) {
  const [rain, setRain] = useState({});
  const [showExtras, setShowExtras] = useState(false);

  const toggle = (i) => setExpanded((p) => ({ ...p, [i]: !p[i] }));
  const toggleRain = (i, e) => {
    e.stopPropagation();
    setRain((p) => ({ ...p, [i]: !p[i] }));
  };

  return (
    <>
      {DAYS.map((day, i) => {
        const isOpen = !!expanded[i];
        const isRain = !!rain[i];
        const items = isRain && day.rainItems ? day.rainItems : day.items;
        const note = isRain && day.rainNote ? day.rainNote : day.note;
        return (
          <div
            key={i}
            style={{
              marginBottom: 7,
              borderRadius: 12,
              border: `1px solid ${isOpen ? day.color + "55" : T.BORDER}`,
              background: isRain ? "#eef2ff" : T.CARD,
              overflow: "hidden",
              boxShadow: isOpen ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
            }}
          >
            <button
              onClick={() => toggle(i)}
              style={{
                width: "100%", background: "none", border: "none", cursor: "pointer",
                padding: "13px 15px", display: "flex", alignItems: "center", gap: 12,
                textAlign: "left", color: "inherit",
              }}
            >
              <span style={{ fontSize: 20, minWidth: 28, textAlign: "center" }}>{day.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 2.5, color: day.color, marginBottom: 2 }}>
                  {day.label} · {day.date.toUpperCase()} · {day.weekday.toUpperCase()}
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: T.TEXT }}>{day.title}</div>
              </div>
              {day.hasRain && (
                <button
                  onClick={(e) => toggleRain(i, e)}
                  style={{
                    background: isRain ? "#4466cc" : T.CHIP,
                    border: `1px solid ${isRain ? "#3355bb" : T.BORDER}`,
                    borderRadius: 20, padding: "3px 10px", fontSize: 12,
                    cursor: "pointer", color: isRain ? "#fff" : "#888",
                    fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0,
                  }}
                >
                  {isRain ? "🌧️ Дождь" : "☀️ Ясно"}
                </button>
              )}
              <span style={{ color: "#ccc", fontSize: 14, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
            </button>
            {isOpen && (
              <div style={{ borderTop: `1px solid ${isRain ? "#c8d0f0" : T.BORDER}`, padding: "14px 15px" }}>
                {items.map((item, j) => (
                  <div key={j} style={{ display: "flex", gap: 10, marginBottom: 11, alignItems: "flex-start" }}>
                    <div style={{ minWidth: 62, fontSize: 10, color: T.MUTED, fontWeight: 600, paddingTop: 3, flexShrink: 0 }}>{item.time || ""}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13.5, color: T.TEXT, lineHeight: 1.45 }}>{item.text}</div>
                      {item.sub && <div style={{ fontSize: 11.5, color: "#aaa8c0", marginTop: 3, lineHeight: 1.4 }}>{item.sub}</div>}
                    </div>
                  </div>
                ))}
                {note && (
                  <div style={{ marginTop: 12, padding: "9px 13px", background: isRain ? "#dde4ff" : "#faf7f0", borderLeft: `3px solid ${day.color}`, borderRadius: "0 8px 8px 0", fontSize: 12, color: "#666", lineHeight: 1.5 }}>
                    {note}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Extras */}
      <div style={{ marginTop: 8, borderRadius: 12, border: `1px solid ${T.BORDER}`, background: T.CARD, overflow: "hidden" }}>
        <button
          onClick={() => setShowExtras((p) => !p)}
          style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, textAlign: "left", color: T.TEXT }}
        >
          <span style={{ fontSize: 20 }}>✨</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 2.5, color: "#aa8833", marginBottom: 2 }}>БОНУС</div>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Ещё интересные места</div>
          </div>
          <span style={{ color: "#ccc", fontSize: 14, transform: showExtras ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
        </button>
        {showExtras && (
          <div style={{ borderTop: `1px solid ${T.BORDER}`, padding: "14px 15px" }}>
            <div style={{ fontSize: 12, color: T.MUTED, marginBottom: 12 }}>Не вошли в основной план — но стоят внимания, если будет свободное время</div>
            {EXTRAS.map((e, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 18, minWidth: 24 }}>{e.icon}</span>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: T.TEXT }}>{e.name}</div>
                  <div style={{ fontSize: 12, color: T.MUTED, marginTop: 2, lineHeight: 1.4 }}>{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
