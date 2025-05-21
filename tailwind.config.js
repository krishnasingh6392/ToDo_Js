module.exports = {
  content: ["./*.html", "./*.js", "../*.html"],
  safelist: [
    "bg-blue-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-slate-500",
    "bg-red-500",
    "bg-amber-500",
    "bg-yellow-500",
  ],
  theme: {
    extend: {
      height: {
        100: "400px",
      },
    },
  },
  plugins: [],
};
