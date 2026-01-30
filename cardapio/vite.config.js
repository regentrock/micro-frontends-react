import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cardapio", // ou "pedido"
      filename: "remoteEntry.js",
      exposes: {
        "./Cardapio": "./src/App.jsx", // ajuste no pedido
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    outDir: "dist",
  },
});
