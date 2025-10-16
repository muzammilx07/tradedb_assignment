/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',      // blue
        secondary: '#6366f1',    // violet
        accent: '#38bdf8',       // skyblue
        dark: '#111827',         // black
        light: '#f9fafb',        // white/light gray
      }
    }
  },
  plugins: []
}
