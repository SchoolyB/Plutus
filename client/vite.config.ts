import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, //setting port we want to run the front end on
    proxy: {
      "/api": {
        //telling frontendthat the rout "/api" is our proxy route
        target: "HTTP://localhost:4040", //telling our front end to use the "api" proxy route to serve up on local host:4040
      },
    },
  },
});
