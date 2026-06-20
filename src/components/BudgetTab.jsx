import {
  SPENT_GROUPS, PLANNED, CASH_ON_HAND, FORECAST_TOTAL,
  totalSpent, totalPlanned, SUMMARY_DATE, RATE_NOTE, fmt,
} from "../data/budget.js";
import { T } from "../theme.js";

const sum = (items) => items.reduce((a, i) => a + i.rub, 0);

function Section({ title, total, color, items }) {
  return (
    <div style={{ marginBottom: 10, padding: 16, background: T.CARD, borderRadius: 12, border: `1px solid ${T.BORDER}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ fontSize: 10, letterSpacing: 2.5, fontWeight: 700, color }}>{title}</div>
        <div style={{ fontSize: 16, fontWeight: 700, color }}>{fmt(total)}</div>
      </div>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, paddingBottom: 10, borderBottom: i < items.length - 1 ? `1px solid ${T.BORDER}` : "none" }}>
          <div style={{ flex: 1, marginRight: 12 }}>
            <div style={{ fontSize: 13.5, color: T.TEXT, fontWeight: 500 }}>{item.name}</div>
            {item.note && <div style={{ fontSize: 11, color: T.MUTED, marginTop: 2 }}>{item.note}</div>}
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: T.TEXT, whiteSpace: "nowrap" }}>{fmt(item.rub)}</div>
        </div>
      ))}
    </div>
  );
}

export default function BudgetTab() {
  return (
    <div>
      {/* Сводка */}
      <div style={{ marginBottom: 12, padding: 20, background: T.CARD, borderRadius: 12, border: `1px solid ${T.BORDER}`, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: T.RED, fontWeight: 700, marginBottom: 8 }}>
          ПОТРАЧЕНО · СВОДКА {SUMMARY_DATE.toUpperCase()}
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, color: T.TEXT }}>{fmt(totalSpent)}</div>
        <div style={{ marginTop: 8, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, color: "#5566cc" }}>📋 Ещё запланировано: {fmt(totalPlanned)}</span>
          <span style={{ fontSize: 12, color: "#3a9a5a" }}>💴 Наличные: {CASH_ON_HAND.yen.toLocaleString("ru-RU")}¥ ≈ {fmt(CASH_ON_HAND.rub)}</span>
        </div>
        <div style={{ marginTop: 12, padding: "10px 14px", background: "#fffdf5", borderRadius: 8, border: "1px solid #e8e0c0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#aa8822" }}>ИТОГО ПОЕЗДКИ (по факту)</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: T.TEXT, whiteSpace: "nowrap" }}>~{fmt(FORECAST_TOTAL)}</span>
        </div>
        <div style={{ marginTop: 10, padding: "8px 12px", background: T.BG, borderRadius: 8, fontSize: 11.5, color: T.MUTED }}>
          {RATE_NOTE}
        </div>
      </div>

      {/* Потрачено по категориям */}
      {SPENT_GROUPS.map((g) => (
        <Section key={g.title} title={"✅ " + g.title.toUpperCase()} total={sum(g.items)} color={g.color} items={g.items} />
      ))}

      {/* Запланировано */}
      {PLANNED.length > 0 && (
        <Section title="📋 ЕЩЁ ЗАПЛАНИРОВАНО (НЕ ОПЛАЧЕНО)" total={totalPlanned} color="#5566cc" items={PLANNED} />
      )}

      <div style={{ padding: "14px 16px", background: "#fffdf5", borderRadius: 12, border: "1px solid #e8e0c0" }}>
        <div style={{ fontSize: 10, letterSpacing: 2.5, fontWeight: 700, color: "#aa8822", marginBottom: 8 }}>💡 ЗАМЕТКИ</div>
        <div style={{ fontSize: 12.5, color: T.MUTED, lineHeight: 1.7 }}>
          <b style={{ color: T.TEXT }}>Поездка завершена</b> — все суммы по факту<br />
          Не в счёт: роутер (20 000¥), чемодан (10 000¥), подписка<br />
          «Пересадка (Гуанчжоу)» — уже не Япония, но в общий итог входит
        </div>
      </div>
    </div>
  );
}
