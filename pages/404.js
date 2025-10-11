import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text my={4}>
        The page you&apos;re looking for has wandered off, but don&apos;t worry!
      </Text>
      <Text>Let&apos;s get you back on track.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Take me home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
