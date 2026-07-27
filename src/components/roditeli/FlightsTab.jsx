import Card from "../common/Card.jsx";
import Row from "../common/Row.jsx";
import BulletList from "../common/BulletList.jsx";
import WarnBanner from "../common/WarnBanner.jsx";
import { FLIGHTS_WARNING, FLIGHTS_ROUTE, FLIGHTS_ALT, FLIGHTS_NOTES } from "../../data/roditeli/flights.js";

export default function FlightsTab() {
  return (
    <div>
      <WarnBanner icon="✈️">{FLIGHTS_WARNING}</WarnBanner>

      <Card title="Рекомендуемый маршрут">
        {FLIGHTS_ROUTE.map((r, i) => (
          <Row key={r.name} name={r.name} note={r.note} last={i === FLIGHTS_ROUTE.length - 1} />
        ))}
      </Card>

      <Card title="Альтернативные маршруты (если China Southern неудобен по датам/цене)">
        <BulletList items={FLIGHTS_ALT} />
      </Card>

      <Card title="Что важно">
        <BulletList items={FLIGHTS_NOTES} />
      </Card>
    </div>
  );
}
