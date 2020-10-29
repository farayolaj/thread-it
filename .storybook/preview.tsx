import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/core';

import { AuthProvider } from '../src/context/AuthContext';
import theme from '../src/theme';
import { ThreadProvider } from '../src/context/ThreadContext';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};

export const decorators = [
  Story => (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="system" />
      <Story />
    </ChakraProvider>
  ),
  Story => (
    <AuthProvider>
      <ThreadProvider>
        <Story />
      </ThreadProvider>
    </AuthProvider>
  )
]
