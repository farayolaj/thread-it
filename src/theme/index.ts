import { extendTheme/* , theme */ } from '@chakra-ui/core';
// import { merge } from '@chakra-ui/utils';

import Tag from './tag';
import Button from './button';

const customTheme = {
  colors: {
    primary: 'rgb(155, 81, 224)',
    secondary: 'rgba(155, 81, 224, 0.3)',
    transwhite: 'rgba(255, 255, 255, 0.5)',
    transblack: 'rgba(0, 0, 0, 0.5)'
  },
  components: {
    Button,
    Tag
  }
};

export default extendTheme(customTheme);