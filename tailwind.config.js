const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    content: ["node_modules/daisyui/dist/**/*.js"],
    plugins: [require("daisyui")],
    safelist: [{
        pattern: /./
    }, ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
    },
}