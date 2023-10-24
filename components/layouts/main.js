import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import { Footer } from '../footer'
import NavBar from '../navbar'
import { Loader } from '../laptop-loader'

const LazyLaptop = dynamic(() => import('../laptop'), {
  ssr: false,
  loading: () => <Loader />
})

export const Layout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Vladimir's homepage" />
        <meta name="author" content="Vladimir Bachilo" />
        <meta name="author" content="vladimir-bachilo" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Vladimir Bachilo" />
        <meta name="og:title" content="Vladimir Bachilo" />
        <meta property="og:type" content="website" />
        <title>Vladimir Bachilo - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyLaptop />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}
