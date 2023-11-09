import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            // Dosya uzantısına göre MIME türlerini ayarlayın
            if (assetInfo.name.endsWith(".html")) {
              return `assets/[name][ext]`;
            } else if (assetInfo.name.endsWith(".js")) {
              return `assets/[name][ext]`;
            } else if (assetInfo.name.endsWith(".css")) {
              return `assets/[name][ext]`;
            } else if (assetInfo.name.endsWith(".json")) {
              return `assets/[name][ext]`;
            } else if (assetInfo.name.endsWith(".svg")) {
              return `assets/[name][ext]`;
            } else if (assetInfo.name.endsWith(".png")) {
              return `assets/[name][ext]`;
            } else if (
              assetInfo.name.endsWith(".jpg") ||
              assetInfo.name.endsWith(".jpeg")
            ) {
              return `assets/[name][ext]`;
            } else if (assetInfo.name.endsWith(".gif")) {
              return `assets/[name][ext]`;
            } else if (assetInfo.name.endsWith(".ico")) {
              return `assets/[name][ext]`;
            } else if (assetInfo.name.endsWith(".woff")) {
              return `assets/[name][ext]`;
            } else if (assetInfo.name.endsWith(".woff2")) {
              return `assets/[name][ext]`;
            } else if (assetInfo.name.endsWith(".eot")) {
              return `assets/[name][ext]`;
            } else if (assetInfo.name.endsWith(".ttf")) {
              return `assets/[name][ext]`;
            } else if (assetInfo.name.endsWith(".otf")) {
              return `assets/[name][ext]`;
            } else {
              return `assets/[name]-[hash][ext]`; // Diğer dosyalar için varsayılan ayar
            }
          },
        },
      },
    },
  };

  if (command !== "serve") {
    config.base = "/";
  }

  return config;
});
