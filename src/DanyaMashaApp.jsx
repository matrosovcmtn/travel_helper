import { useState } from "react";
import { DAYS, EXTRAS } from "./data/days.js";
import { SECTIONS as CHECKLIST_SECTIONS } from "./data/checklist.js";
import { CAT, LOCS, BOUNDS } from "./data/locations.js";
import { T } from "./theme.js";
import PlanTab from "./components/PlanTab.jsx";
import BudgetTab from "./components/BudgetTab.jsx";
import MapTab from "./components/MapTab.jsx";
import ChecklistTab from "./components/ChecklistTab.jsx";

const TABS = [
  ["plan", "📅 Маршрут"],
  ["budget", "💰 Бюджет"],
  ["map", "🗺️ Карта"],
  ["check", "✅ Чеклист"],
];

const MAP_VIEWS = [["tokyo", "🗼 Токио"], ["all", "🗾 Вся поездка"]];

export default function DanyaMashaApp({ onBack }) {
  const [tab, setTab] = useState("plan");
  const [expanded, setExpanded] = useState({});

  const expandAll = () => {
    const allOpen = DAYS.every((_, i) => expanded[i]);
    const s = {};
    DAYS.forEach((_, i) => (s[i] = !allOpen));
    setExpanded(s);
  };
  const everyOpen = DAYS.every((_, i) => expanded[i]);

  return (
    <div style={{ background: T.BG, color: T.TEXT, minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "#fff", borderBottom: `1px solid ${T.BORDER}`, padding: "28px 18px 20px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <button
            onClick={onBack}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: 10, display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: T.MUTED }}
          >
            ← На главную
          </button>
          <div style={{ fontSize: 10, letterSpacing: 5, color: T.RED, fontWeight: 700, marginBottom: 8 }}>ТОКИО · ЯПОНИЯ · 2026</div>
          <h1 style={{ margin: 0, fontSize: 30, fontWeight: 800, letterSpacing: -0.5, color: T.TEXT }}>Маршрут поездки</h1>
          <div style={{ marginTop: 5, color: T.MUTED, fontSize: 13 }}>2 человека · 6–18 июня · 12 ночей · Коэндзи</div>
          <div style={{ marginTop: 14, display: "flex", gap: 6, flexWrap: "wrap" }}>
            {["Фудзи + Хаконэ (9–10)", "Daikoku ночью", "Disneyland", "teamLab", "Камакура + море", "Янака", "Кагурадзака"].map((t) => (
              <span key={t} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: T.CHIP, border: `1px solid ${T.BORDER}`, color: "#666" }}>{t}</span>
            ))}
          </div>
          <div style={{ marginTop: 18, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {TABS.map(([k, l]) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                style={{
                  padding: "8px 18px", borderRadius: 8, border: "none", cursor: "pointer",
                  fontSize: 13, fontWeight: 600,
                  background: tab === k ? T.RED : T.CHIP, color: tab === k ? "#fff" : "#555",
                }}
              >
                {l}
              </button>
            ))}
            {tab === "plan" && (
              <button
                onClick={expandAll}
                style={{ marginLeft: "auto", background: T.CHIP, border: `1px solid ${T.BORDER}`, borderRadius: 8, color: "#777", padding: "8px 14px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}
              >
                {everyOpen ? "СВЕРНУТЬ ВСЁ" : "РАЗВЕРНУТЬ ВСЁ"}
              </button>
            )}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "14px 14px 48px" }}>
        {tab === "plan" && <PlanTab days={DAYS} extras={EXTRAS} expanded={expanded} setExpanded={setExpanded} />}
        {tab === "budget" && <BudgetTab />}
        {tab === "map" && <MapTab locations={LOCS} categories={CAT} bounds={BOUNDS} views={MAP_VIEWS} defaultView="tokyo" />}
        {tab === "check" && (
          <ChecklistTab
            sections={CHECKLIST_SECTIONS}
            storageKey="travel_helper_checklist"
            footnote="💡 Японские банкоматы 7-Eleven и Japan Post принимают иностранные карты Visa/Mastercard. Наличные нужны — многие кафе и рёканы не берут карту."
          />
        )}
      </div>
    </div>
  );
}
