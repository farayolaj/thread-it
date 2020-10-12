import React from 'react';
import { ChakraProvider } from '@chakra-ui/core';

import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};

export const decorators = [
  Story => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  )
]