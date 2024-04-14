import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const API_URL = env.VITE_API_URL;
	return {
		plugins: [react(), tsconfigPaths()],
		server: {
			proxy: {
				"/api": {
          target: API_URL,
          changeOrigin: true,
        }
			},
		},
	};
});
