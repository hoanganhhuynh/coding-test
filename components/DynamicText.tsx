import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Text } from '@chakra-ui/react'

const DynamicText = forwardRef((props, ref) => {
  const [value, setValue] = useState("Random Text");

  useImperativeHandle(
    ref,
    () => ({
      changeValue(newValue) {
        setValue(newValue);
      }
    }),
  ) 
  
  return <Text fontSize='3xl'>{value}</Text>;
});

export default DynamicText;
