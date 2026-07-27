import { useState, useEffect } from "react";
import { T } from "../theme.js";

export default function ChecklistTab({ sections, storageKey, footnote }) {
  const [done, setDone] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(done));
  }, [done, storageKey]);

  const tog = (k) => setDone((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div>
      {sections.map(({ title, color, items }) => (
        <div key={title} style={{ marginBottom: 12, padding: "14px 16px", background: T.CARD, borderRadius: 12, border: `1px solid ${T.BORDER}` }}>
          <div style={{ fontSize: 10, letterSpacing: 2.5, fontWeight: 700, color, marginBottom: 12 }}>{title}</div>
          {items.map(({ key, text, sub, urgent }) => (
            <div
              key={key}
              onClick={() => tog(key)}
              style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10, cursor: "pointer", opacity: done[key] ? 0.45 : 1 }}
            >
              <div
                style={{
                  width: 18, height: 18, borderRadius: 4,
                  border: `2px solid ${done[key] ? "#3a9a5a" : T.BORDER}`,
                  background: done[key] ? "#3a9a5a" : "#fff",
                  flexShrink: 0, marginTop: 2,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                {done[key] && <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>✓</span>}
              </div>
              <div>
                <div style={{ fontSize: 13.5, color: T.TEXT, fontWeight: 500, textDecoration: done[key] ? "line-through" : "none" }}>
                  {urgent && !done[key] && <span style={{ color: T.RED, fontWeight: 700, marginRight: 4 }}>❗</span>}
                  {text}
                </div>
                {sub && <div style={{ fontSize: 11, color: T.MUTED, marginTop: 2 }}>{sub}</div>}
              </div>
            </div>
          ))}
        </div>
      ))}

      {footnote && (
        <div style={{ padding: "10px 14px", background: "#fffdf5", borderRadius: 10, border: "1px solid #e8e0c0", fontSize: 12, color: T.MUTED }}>
          {footnote}
        </div>
      )}
    </div>
  );
}
