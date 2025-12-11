import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    exclude: ['**/node_modules/**', '**/build/**'],
    coverage: {
      exclude: ['**/build/**', 'next.config.ts', 'vitest.config.ts', '.next/**']
    }
  },
});
