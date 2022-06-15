import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import { MemoryRouter } from "react-router-dom";
import Footer from ".";

const FooterStory = {
  title: "Design System/Organisms/FooterStory",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <Footer/>
    </MemoryRouter>
  </ThemeProvider>
);

export const ReadCard = Template.bind({});


export default FooterStory;
