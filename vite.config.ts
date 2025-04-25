import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        service: resolve(__dirname, 'service.html'),
      },
    },
  },
});
