import { rich } from "../../lib/richText.jsx";
import { T } from "../../theme.js";

export default function BulletList({ items }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {items.map((it, i) => (
        <li
          key={i}
          style={{
            display: "flex", gap: 10, padding: "9px 0",
            borderBottom: i < items.length - 1 ? `1px solid ${T.BORDER}` : "none",
            fontSize: 13, lineHeight: 1.5, color: T.TEXT,
          }}
        >
          <span style={{ color: T.RED, fontWeight: 700, flexShrink: 0 }}>{it.bullet || "→"}</span>
          <span>
            {rich(it.text)}
            {it.sub && <div style={{ fontSize: 11.5, color: T.MUTED, marginTop: 3, lineHeight: 1.4 }}>{rich(it.sub)}</div>}
          </span>
        </li>
      ))}
    </ul>
  );
}
