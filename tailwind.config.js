/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./pages/*.{html,js}",
        "./components/**/*.{html,js}",
      ],
    safelist: [
        {
            pattern: /./
        },
    ],
    theme: {
            extend: {},
    },
    plugins: [
            require("daisyui"),
    ],
}
