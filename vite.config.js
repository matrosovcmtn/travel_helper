import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Относительный base → ассеты работают и локально, и на под-пути GitHub Pages
  // (https://<user>.github.io/travel_helper/). SPA без роутера, поэтому './' безопасен.
  base: "./",
  plugins: [react()],
  server: { port: 5173, open: true },
});
