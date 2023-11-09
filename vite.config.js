import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    server: {
      mimeTypes: {
        ".jsx": "application/javascript",
      },
    },
  };

  if (command !== "serve") {
    config.base = "/";
  }

  return config;
});
