import { extendTheme/* , theme */ } from '@chakra-ui/core';
// import { merge } from '@chakra-ui/utils';

import Button from './button';
import Drawer from './drawer';
import Tag from './tag';


const customTheme = {
  colors: {
    primary: 'rgb(155, 81, 224)',
    secondary: 'rgba(155, 81, 224, 0.2)'
  },
  components: {
    Button,
    Drawer,
    Tag
  }
};

export default extendTheme(customTheme);