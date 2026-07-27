import { useState, useEffect } from "react";
import Home from "./components/Home.jsx";
import DanyaMashaApp from "./DanyaMashaApp.jsx";
import RoditeliApp from "./RoditeliApp.jsx";

const TRIP_KEYS = new Set(["dm", "roditeli"]);

function tripFromHash() {
  const key = window.location.hash.replace("#", "");
  return TRIP_KEYS.has(key) ? key : null;
}

export default function App() {
  const [trip, setTrip] = useState(tripFromHash);

  useEffect(() => {
    const onHashChange = () => setTrip(tripFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const selectTrip = (key) => {
    window.location.hash = key;
    setTrip(key);
  };
  const goHome = () => {
    window.location.hash = "";
    setTrip(null);
  };

  if (trip === "dm") return <DanyaMashaApp onBack={goHome} />;
  if (trip === "roditeli") return <RoditeliApp onBack={goHome} />;
  return <Home onSelect={selectTrip} />;
}
