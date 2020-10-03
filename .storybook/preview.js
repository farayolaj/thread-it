import React from 'react';
// import '../src/index.css';
// import '../src/assets/bootstrap.min.css';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};

export const decorators = [
  Story => (
    <ThemeProvider>
      <CSSReset />
      <Story />
    </ThemeProvider>
  )
]