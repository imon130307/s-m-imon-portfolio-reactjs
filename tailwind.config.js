// tailwind.config.js
import materialTailwind from "@material-tailwind/react/plugin"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [materialTailwind],
};
