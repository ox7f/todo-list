import React from "react";

import { StoryHeader } from "./Header";

export default {
    title: "UI/Header",
    component: StoryHeader,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
};

const Template = (args) => <StoryHeader {...args} />;

export const Default = Template.bind({});
