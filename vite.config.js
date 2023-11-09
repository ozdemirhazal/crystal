import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // .jsx uzantılı dosyalar için "text/jsx" MIME türünü ayarlayın
          if (assetInfo.name.endsWith(".jsx")) {
            return `assets/[name][ext]:text/jsx`;
          }
          // Diğer dosya türleri için varsayılan ayarları kullanın
          return `assets/[name]-[hash][ext]`;
        },
      },
    },
  },
});
