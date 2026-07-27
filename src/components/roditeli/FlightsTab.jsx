import Card from "../common/Card.jsx";
import Row from "../common/Row.jsx";
import BulletList from "../common/BulletList.jsx";
import WarnBanner from "../common/WarnBanner.jsx";
import { FLIGHTS_CHECKED, FLIGHTS_OPTIONS, FLIGHTS_NOTES } from "../../data/roditeli/flights.js";

export default function FlightsTab() {
  return (
    <div>
      <WarnBanner icon="✈️">{FLIGHTS_CHECKED}</WarnBanner>

      <Card title="Реальные варианты (Москва ↔ Осака/Токио)">
        {FLIGHTS_OPTIONS.map((r, i) => (
          <Row key={r.name} name={r.name} note={r.note} value={r.value} last={i === FLIGHTS_OPTIONS.length - 1} />
        ))}
      </Card>

      <Card title="Что важно">
        <BulletList items={FLIGHTS_NOTES} />
      </Card>
    </div>
  );
}
