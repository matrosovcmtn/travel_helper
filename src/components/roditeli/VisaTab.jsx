import WarnBanner from "../common/WarnBanner.jsx";
import ChecklistTab from "../ChecklistTab.jsx";
import { VISA_WARNING } from "../../data/roditeli/visa.js";
import { SECTIONS } from "../../data/roditeli/checklist.js";

export default function VisaTab() {
  return (
    <div>
      <WarnBanner>{VISA_WARNING}</WarnBanner>
      <ChecklistTab
        sections={SECTIONS}
        storageKey="travel_helper_checklist_roditeli"
        footnote="💡 Российские карты Visa/Mastercard/МИР в Японии не работают — только наличные или UnionPay."
      />
    </div>
  );
}
