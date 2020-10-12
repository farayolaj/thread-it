import { mode } from '@chakra-ui/theme-tools';

function footerVariant(props: Record<string, any>) {
  const { colorScheme } = props;

  return {
    bg: mode('whiteAlpha.500', 'blackAlpha.500')(props),
    color: mode('black', 'white')(props),
    _active: {
      bg: colorScheme
    },
    _hover: {
      bg: colorScheme
    }
  };
}

export default {
  variants: {
    footer: footerVariant
  }
};