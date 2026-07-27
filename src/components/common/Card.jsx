import { T } from "../../theme.js";

export default function Card({ title, color = "#8888aa", children }) {
  return (
    <div style={{ marginBottom: 10, padding: 16, background: T.CARD, borderRadius: 12, border: `1px solid ${T.BORDER}` }}>
      {title && (
        <div style={{ fontSize: 11, letterSpacing: 2.5, fontWeight: 700, color, marginBottom: 12, textTransform: "uppercase" }}>
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
