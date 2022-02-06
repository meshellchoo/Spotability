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
