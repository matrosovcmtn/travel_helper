import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// StrictMode намеренно не используем: двойной mount ломает инициализацию Leaflet-карты.
createRoot(document.getElementById("root")).render(<App />);
