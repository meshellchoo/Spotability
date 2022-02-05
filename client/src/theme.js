import { extendTheme, Stack } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';
import { createBreakpoints } from '@chakra-ui/theme-tools'


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
  useSystemColorMode: false,
}

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#fec5bb', '#121212')(props),
      color: mode('#000000', '#fec5bb')(props),
      fontSize: '20px',
    }
  })
}

const theme = extendTheme({
  config,
  styles,
})

export default theme;
