import Card from "../common/Card.jsx";
import Row from "../common/Row.jsx";
import BulletList from "../common/BulletList.jsx";
import WarnBanner from "../common/WarnBanner.jsx";
import { VISA_WARNING, VISA_WHERE, VISA_DOCS, VISA_TYPES, VISA_PREP } from "../../data/roditeli/visa.js";

export default function VisaTab() {
  return (
    <div>
      <WarnBanner>{VISA_WARNING}</WarnBanner>

      <Card title="Куда подавать">
        <BulletList items={VISA_WHERE} />
      </Card>

      <Card title="Пакет документов на визу (на каждого)">
        <BulletList items={VISA_DOCS} />
      </Card>

      <Card title="Тип визы">
        {VISA_TYPES.map((t, i) => (
          <Row key={t.name} name={t.name} note={t.note} last={i === VISA_TYPES.length - 1} />
        ))}
      </Card>

      <Card title="Остальные документы и подготовка">
        <BulletList items={VISA_PREP} />
      </Card>
    </div>
  );
}
