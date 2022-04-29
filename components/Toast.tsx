import { Box, useToast } from "native-base";
import React from "react";

type Props = {
  text?: string;
  color?: string;
};

const Toast = ({ text = "", color = "emerald.500" }: Props) => {
  return (
    <Box bg={color} px="2" py="1" rounded="sm" mb={5}>
      {text}
    </Box>
  );
};

export default Toast;
