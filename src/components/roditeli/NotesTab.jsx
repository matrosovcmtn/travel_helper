import Card from "../common/Card.jsx";
import BulletList from "../common/BulletList.jsx";
import { NOTES_CARDS } from "../../data/roditeli/notes.js";

export default function NotesTab() {
  return (
    <div>
      {NOTES_CARDS.map((c) => (
        <Card key={c.title} title={c.title}>
          <BulletList items={c.items} />
        </Card>
      ))}
    </div>
  );
}
