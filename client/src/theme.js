import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const Card = {
  // The styles all Cards have in common
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    alignItems: 'center',
    gap: 6,
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 8,
      borderRadius: 'xl',
      boxShadow: 'xl',
    },
    smooth: {
      padding: 6,
      borderRadius: 'base',
      boxShadow: 'md',
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'smooth',
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: props => ({
    body: {
      // bg: mode('#fec5bb', '#121212')(props),
      bg: mode('pink.100', 'brand.800')(props),
      color: mode('brand.800', 'pink.100')(props),
      // color: mode('#121212', '#fec5bb')(props),
    },
  }),
};

const theme = extendTheme({
  components: {
    Card,
  },
  config,
  styles,
  fonts: {
    heading: 'Montserrat',
    body: 'Poppins',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '22px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '42px',
    '6xl': '48px',
  },
  fontWeights: {
    normal: 400,
    medium: 700,
    bold: 900,
  },
  colors: {
    pink: {
      100: '#FDEFF4',
      200: '#FFC0D3',
      300: '#FF5C8D',
      900: '#FCD5CE',
    },
    gray: {
      100: '#B3B3B3',
      900: '#524A4E',
    },
    black: {
      100: '#121212',
    },
    brand: {
      100: '#eedad1',
      200: '#eec9b9',
      300: '#b28591',
      400: '#BAB285',
      500: '#123C69',
      600: '#d47b98',
      700: '#AC3B61',
      800: '#121212',
    },
  },
});

export default theme;
