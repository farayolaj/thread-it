import { mode } from '@chakra-ui/theme-tools';

function footer(props: Record<string, any>) {
  return {
    container: {
      bg: mode('whiteAlpha.500', 'blackAlpha.500')(props),
      color: mode('black', 'white')(props)
    }
  };
}

const Tag = {
  variants: {
    footer
  }
};

export default Tag;