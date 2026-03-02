import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
//import { animate } from 'animejs';

export default defineConfig({
  plugins: [tailwindcss(), react() ],
});

