import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    fs: {
      allow: [
        // Allow project root
        path.resolve(__dirname),
        // Also allow netlify folder explicitly if you want (optional)
        path.resolve(__dirname, "netlify"),
      ],
    },
  },
});
