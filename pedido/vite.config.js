import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pedido",
      filename: "remoteEntry.js",
      exposes: {
        "./Pedido": "./src/App.jsx",
      },
      shared: ["react", "react-dom"],
    })
  ],
  build: {
    target: "esnext",
    outDir: "dist",
  },
});
