import Card from "../common/Card.jsx";
import { T } from "../../theme.js";
import { SCHEDULE } from "../../data/roditeli/scheduleOfStay.js";

export default function ScheduleOfStayTab() {
  return (
    <div>
      <Card title="Schedule of Stay — черновик для визы">
        <div style={{ fontSize: 12.5, color: T.MUTED, lineHeight: 1.6 }}>
          Схематичная версия официальной «программы пребывания» для подачи на визу — только маршрут по городам,
          без ФИО и контактов отелей. Полная версия (с именами, точными рейсами и телефонами отелей) готовится
          отдельным документом для реальной подачи — эта вкладка нужна как основа и для быстрой сверки дат.
        </div>
      </Card>

      {SCHEDULE.map((d) => (
        <Card key={d.date}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, marginBottom: 6 }}>
            <div style={{ fontWeight: 700, fontSize: 13.5, color: T.TEXT }}>{d.date}</div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: T.RED, textTransform: "uppercase", textAlign: "right" }}>{d.city}</div>
          </div>
          <div style={{ fontSize: 13, color: T.TEXT, lineHeight: 1.5 }}>{d.activity}</div>
          <div style={{ marginTop: 6, fontSize: 11.5, color: T.MUTED }}>🏨 {d.hotel}</div>
        </Card>
      ))}
    </div>
  );
}
