/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "90p": "90%", // 90% of the parent container
        "80p": "80%", // 80% of the parent container
        "50p": "50%", // 50% of the parent container
      },
    },
  },
  plugins: [],
};
