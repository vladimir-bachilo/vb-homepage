import { extendTheme } from '@chakra-ui/react'
import { inter } from '../components/fonts'

const semanticTokens = {
  colors: {
    'page-bg': { default: '#f0e7db', _dark: '#1a1a1a' },
    'section-decoration': { default: '#525252', _dark: '#525252' },
    'link-color': { default: '#3d7aed', _dark: '#ff63c3' }
  }
}

const styles = {
  global: {
    body: {
      bg: 'page-bg'
    }
  }
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: 'section-decoration',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: {
      color: 'link-color',
      textUnderlineOffset: '2.5px',
      transition: '400ms',
      textDecorationColor: 'transparent',
      textDecorationThickness: '1px',
      borderRadius: '4px'
    }
  }
}

const fonts = {
  heading: inter.style.fontFamily,
  body: inter.style.fontFamily
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

export const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
  semanticTokens
})
