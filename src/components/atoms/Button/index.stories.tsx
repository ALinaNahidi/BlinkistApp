
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { ThemeProvider } from "@material-ui/core/styles";

import Button from  ".";

const ButtonComponent = {
  title: "ButtonComponent",
  component: Button,
} as ComponentMeta<typeof Button>;



const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButtonActive = Template.bind({});
PrimaryButtonActive.args = {
  title: "Primary Button",
};

export const PrimaryButtonDisabled = Template.bind({});
PrimaryButtonDisabled.args = {
  title: "Disabled Button",
  disabled: true,
};

export default ButtonComponent;