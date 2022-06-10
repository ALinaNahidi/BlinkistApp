import * as React from "react";

import Typography from "@mui/material/Typography";

interface TypographyComponentProps {
  children: string;
  variant: "header" | "title" | "subtitle" | "body1" | "caption";
}

const getMappedVariant = (variant: string) => {
  switch (variant) {
    case "header":
      return "h4";
    case "title":
      return "subtitle1";
    case "subtitle":
      return "subtitle1";
    default:
      return "body1";
  }
};

const TypographyComponent = (props: TypographyComponentProps) => (
  <Typography variant={getMappedVariant(props.variant)} sx={{whiteSpace:"nowrap"}}  >
    {props.children}
  </Typography>
);

export default TypographyComponent;
