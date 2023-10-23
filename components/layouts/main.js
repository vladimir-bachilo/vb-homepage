import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { Footer } from '../footer'

export const Layout = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Vladimir's homepage" />
        <meta name="author" content="Vladimir Bachilo" />
        <meta name="author" content="vladimir-bachilo" />
        <meta property="og:site_name" content="Vladimir Bachilo" />
        <meta name="og:title" content="Vladimir Bachilo" />
        <meta property="og:type" content="website" />
        <title>Vladimir Bachilo - Homepage</title>
      </Head>

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}
