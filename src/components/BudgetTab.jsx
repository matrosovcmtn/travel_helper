import {
  BUDGET, JPY, fmt,
  totalPaid, totalUpcoming, totalVariable, grandTotal,
} from "../data/budget.js";
import { T } from "../theme.js";

export default function BudgetTab() {
  const sections = [
    { title: "✅ УЖЕ ОПЛАЧЕНО", items: BUDGET.paid, total: totalPaid, color: "#3a9a5a" },
    { title: "📋 НУЖНО ЗАБРОНИРОВАТЬ", items: BUDGET.upcoming, total: totalUpcoming, color: "#5566cc" },
    { title: "📊 ПЕРЕМЕННЫЕ РАСХОДЫ", items: BUDGET.variable, total: totalVariable, color: "#c07020" },
  ];

  return (
    <div>
      <div style={{ marginBottom: 12, padding: 20, background: T.CARD, borderRadius: 12, border: `1px solid ${T.BORDER}`, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: T.RED, fontWeight: 700, marginBottom: 8 }}>ИТОГО ПОЕЗДКА</div>
        <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, color: T.TEXT }}>{fmt(grandTotal)}</div>
        <div style={{ marginTop: 8, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, color: "#3a9a5a" }}>✅ Оплачено: {fmt(totalPaid)}</span>
          <span style={{ fontSize: 12, color: "#5566cc" }}>📋 Забронировать: {fmt(totalUpcoming)}</span>
          <span style={{ fontSize: 12, color: "#c07020" }}>📊 Переменные: {fmt(totalVariable)}</span>
        </div>
        <div style={{ marginTop: 10, padding: "8px 12px", background: T.BG, borderRadius: 8, fontSize: 11.5, color: T.MUTED }}>
          Без шоппинга. Курс: 1 JPY = 0,48 ₽ · 1 USD = 75 ₽
        </div>
      </div>

      {sections.map((sec) => (
        <div key={sec.title} style={{ marginBottom: 10, padding: 16, background: T.CARD, borderRadius: 12, border: `1px solid ${T.BORDER}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontSize: 10, letterSpacing: 2.5, fontWeight: 700, color: sec.color }}>{sec.title}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: sec.color }}>{fmt(sec.total)}</div>
          </div>
          {sec.items.map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, paddingBottom: 10, borderBottom: i < sec.items.length - 1 ? `1px solid ${T.BORDER}` : "none" }}>
              <div style={{ flex: 1, marginRight: 12 }}>
                <div style={{ fontSize: 13.5, color: T.TEXT, fontWeight: 500 }}>{item.name}</div>
                <div style={{ fontSize: 11, color: T.MUTED, marginTop: 2 }}>{item.note}</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: T.TEXT, whiteSpace: "nowrap" }}>{fmt(item.rub)}</div>
            </div>
          ))}
        </div>
      ))}

      <div style={{ padding: "14px 16px", background: "#fffdf5", borderRadius: 12, border: "1px solid #e8e0c0" }}>
        <div style={{ fontSize: 10, letterSpacing: 2.5, fontWeight: 700, color: "#aa8822", marginBottom: 8 }}>💡 НЕ ВКЛЮЧЕНО</div>
        <div style={{ fontSize: 12.5, color: T.MUTED, lineHeight: 1.7 }}>
          <b style={{ color: T.TEXT }}>Шоппинг</b> — добавите отдельно<br />
          <b style={{ color: T.TEXT }}>Серфинг</b> — ~{fmt(Math.round(6000 * 2 * JPY))} за двоих (опционально)<br />
          <b style={{ color: T.TEXT }}>Запас +10%</b> — рекомендуем заложить ≈ {fmt(Math.round(grandTotal * 0.1))}
        </div>
      </div>
    </div>
  );
}
