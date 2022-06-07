import * as React from 'react';
import Button from '@mui/material/Button';

import Typography from "@mui/material/Typography";


interface ButtonProps {
  title?: string;
  disabled?: boolean;
  backgroundColor?: string;
  label?: string;
}

const ButtonComponent = (props: ButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={props.disabled}
      size="medium"
    >
      {props.title}
    </Button>
  );
};

export default ButtonComponent;
