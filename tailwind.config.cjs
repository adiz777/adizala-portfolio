module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        neon: "#00b4ff",
        gold: "#ffb300",
        subtle: "#9ca3af"
      },
      boxShadow: {
        'neon': '0 4px 24px rgba(0,180,255,0.12), 0 0 32px rgba(0,180,255,0.08)'
      }
    }
  },
  plugins: [],
}
