import { extendTheme, Stack } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';
import { createBreakpoints } from '@chakra-ui/theme-tools'

import "@fontsource/inter"
import "@fontsource/roboto"
import "@fontsource/lato"
import "@fontsource/josefin-sans"

// const additional_colors = {
//     colors: {
//       bg_pink: {
//         100: "fae1dd",
//         200: "fcd5ce",
//         300: "fec5bb",
//       }
// }


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
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#fec5bb', '#121212')(props),
      color: mode('#121212', '#fec5bb')(props),
      fontSize: '16px'
    },
  })
}

const theme = extendTheme({
  components: {
    Card,
  },
  config,
  styles,
  fonts : {
    heading: "Josefin Sans",
    body: "Inter"
  },
  fontWeights: {
    normal: 400,
    medium: 700,
    bold: 900,
  }
})

export default theme;
