import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { AuthProvider } from '../src/context/AuthContext';
import theme from '../src/theme';
import { ThreadProvider } from '../src/context/ThreadContext';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};

export const decorators = [
  Story => (
    <ChakraProvider theme={theme}>
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
