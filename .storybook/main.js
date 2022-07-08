module.exports = {
    "stories": [
        "../src/stories/*.stories.*",
        "../src/components/*.stories.*",
    ],   
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-create-react-app"
    ],
    "framework": "@storybook/react",
    "core": {
        "builder": "@storybook/builder-webpack5"
    },
    webpackFinal: async (config, { configType }) => {
        return config;
    },
}