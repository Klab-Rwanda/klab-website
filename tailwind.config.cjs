/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    style: {
      ".input": {
        "@apply appearance-none bg-slate-200 outline-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline":
          {},
      },
      ".card": {
        "@apply shadow-md p-6 rounded-lg bg-white": {},
      },
      ".btn": {
        "@apply bg-blue-500 text-white font-bold py-2 px-4 rounded-full": {},
      },
    },
  },
  plugins: [],
};
