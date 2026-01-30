import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    port: 5173,
    cors: true,
  },
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        cardapio: "http://localhost:4173/assets/remoteEntry.js",
        pedido: "http://localhost:4174/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
