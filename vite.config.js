// Vite is needed up set up the environment to develop a web site using React.
// It bundles up JavaScripts so that React can modify HTML

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
