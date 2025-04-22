/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
    extend: {
      fontFamily: {
        alatsi: ["var(--font-alatsi)"],
      },
    },
  },
};
