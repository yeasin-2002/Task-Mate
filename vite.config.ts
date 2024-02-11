import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/ui": path.resolve(__dirname, "./src/components/ui"),
    },
  },
  build: {
    rollupOptions: {
      external: ["@radix-ui/react-checkbox"],
    },
  },
});
