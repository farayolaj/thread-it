import { darken, lighten, mode } from '@chakra-ui/theme-tools';

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

function primaryVariant(props: Record<string, any>) {
  const { theme } = props;

  const lightBg = lighten('primary', 0.5)(theme);
  const darkBg = darken('primary', 0.5)(theme);
  const bg = mode(lightBg, darkBg)(props);

  return {
    bg: 'primary',
    color: 'white',
    _active: {
      bg
    },
    _hover: {
      bg
    }
  };
}

export default {
  defaultProps: {
    variant: 'primary'
  },
  variants: {
    footer: footerVariant,
    primary: primaryVariant
  }
}; 