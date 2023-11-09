import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite konfigürasyonunu burada tanımlayın
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // .jsx uzantılı dosyalar için MIME türü belirleme
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".jsx")) {
            return `assets/[name][ext]:text/javascript`; // "text/javascript" olarak güncellendi
          }
          return `assets/[name]-[hash][ext]`;
        },
      },
    },
  },
  // Yeni ayar: "resolve" içerisinde ".jsx" uzantısını ekleyin
  resolve: {
    alias: {
      "@": "/src", // Proje içindeki klasörünüzü burada belirtebilirsiniz
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
});
