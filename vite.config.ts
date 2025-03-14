import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "dist", // This should be 'dist' by default.
  },
  plugins: [tailwindcss(), react(), tsconfigPaths()],
});
