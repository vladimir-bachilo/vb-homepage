import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#1a1a1a')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
      transition: '400ms',
      textDecorationColor: 'transparent',
      textUnderlineOffset: '2.5px',
      textDecorationThickness: '1px',
      borderRadius: '4px'
    })
  }
}

const fonts = {
  heading: `'Inter, sans-serif`,
  body: `'Inter, sans-serif`
}

const colors = {
  grassTeal: '#88ccca',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

export const theme = extendTheme({ config, styles, components, fonts, colors })
