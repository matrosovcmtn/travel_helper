import { rich } from "../../lib/richText.jsx";

export default function WarnBanner({ icon = "⏰", children }) {
  return (
    <div
      style={{
        marginBottom: 12, padding: "12px 14px", background: "#fdf6e6",
        borderLeft: "3px solid #cc9922", borderRadius: "0 8px 8px 0",
        fontSize: 12.5, color: "#8a6d1a", lineHeight: 1.55,
      }}
    >
      {icon} {rich(children)}
    </div>
  );
}
