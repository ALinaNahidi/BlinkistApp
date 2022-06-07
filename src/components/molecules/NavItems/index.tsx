import * as React from "react";

import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface NavItemsProps {
  children?: string | JSX.Element ;
  variant?: "header" | "title" | "subtitle" | "body" | "caption";
}

const NavItems = (props: NavItemsProps) => (
  <div style={{ display: "flex", alignItems: "center" , whiteSpace:"nowrap"}}>
    <Typography variant="body1">{props.children}</Typography>
    <KeyboardArrowDownIcon fontSize="medium" />
  </div>
);

export default NavItems;
