import { Box, Typography } from '@mui/material';
import React from 'react'

interface TextHeaderComponentProps {
  children: string;
}

const TextHeader = (props: TextHeaderComponentProps) => {
  return (
    <Box>
      <Typography color="#03314B" style={{ margin: "8% 15% 4%", padding:"0 12px" }} variant="h3">
        {props.children}
      </Typography>
    </Box>
  );
};

export default TextHeader;