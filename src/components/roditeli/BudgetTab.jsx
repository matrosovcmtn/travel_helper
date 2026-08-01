import Card from "../common/Card.jsx";
import Row from "../common/Row.jsx";
import { T } from "../../theme.js";
import { BUDGET_HERO, BUDGET_GROUPS } from "../../data/roditeli/budget.js";

export default function BudgetTab() {
  return (
    <div>
      <div
        style={{
          marginBottom: 12, padding: 20, background: "linear-gradient(135deg, #fdf1ec, #ffffff)",
          borderRadius: 12, border: `1px solid ${T.BORDER}`, boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        }}
      >
        <div style={{ fontSize: 10, letterSpacing: 3, color: T.RED, fontWeight: 700, marginBottom: 8 }}>{BUDGET_HERO.label}</div>
        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1, color: T.TEXT }}>{BUDGET_HERO.range}</div>
        <div style={{ marginTop: 10, fontSize: 12, color: T.MUTED, lineHeight: 1.6 }}>{BUDGET_HERO.note}</div>
        {BUDGET_HERO.subRange && (
          <div style={{ marginTop: 8, fontSize: 11, color: "#aaa" }}>
            {BUDGET_HERO.subLabel}: {BUDGET_HERO.subRange}
          </div>
        )}
      </div>

      {BUDGET_GROUPS.map((g) => (
        <Card key={g.title} title={g.title} color={g.color}>
          {g.items.map((item, i) => (
            <Row key={item.name} name={item.name} note={item.note} value={item.value} last={i === g.items.length - 1} />
          ))}
        </Card>
      ))}
    </div>
  );
}
