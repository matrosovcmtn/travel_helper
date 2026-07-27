import { rich } from "../../lib/richText.jsx";
import { T } from "../../theme.js";

export default function Row({ name, note, value, last = false }) {
  return (
    <div
      style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        marginBottom: last ? 0 : 10, paddingBottom: last ? 0 : 10,
        borderBottom: last ? "none" : `1px solid ${T.BORDER}`,
      }}
    >
      <div style={{ flex: 1, marginRight: 12 }}>
        <div style={{ fontSize: 13.5, color: T.TEXT, fontWeight: 500 }}>{rich(name)}</div>
        {note && <div style={{ fontSize: 11, color: T.MUTED, marginTop: 2, lineHeight: 1.4 }}>{rich(note)}</div>}
      </div>
      {value && <div style={{ fontSize: 14, fontWeight: 600, color: T.TEXT, whiteSpace: "nowrap" }}>{value}</div>}
    </div>
  );
}
