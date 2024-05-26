import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      VITE_EMAIL_SERVICE_ID: JSON.stringify(env.VITE_EMAIL_SERVICE_ID),
      VITE_EMAIL_TEMPLATE_ID: JSON.stringify(env.VITE_EMAIL_TEMPLATE_ID),
      VITE_EMAIL_PUBLIC_KEY: JSON.stringify(env.VITE_EMAIL_PUBLIC_KEY),
      VITE_GITHUB_URL: JSON.stringify(env.VITE_GITHUB_URL),
      VITE_LINKEDIN_URL: JSON.stringify(env.VITE_LINKEDIN_URL),
    },
  };
});
