import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import { Paragraph } from '../components/paragraph'
import { BioYear } from '../components/bio'
import { Layout } from '../components/layouts/article'
import { Section } from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { AiFillSpotify } from 'react-icons/ai'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container maxW="xl">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, there!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Vladimir Bachilo
          </Heading>
          <p>Digital Craftsman ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/vladimir.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Introduction
        </Heading>
        <Paragraph>
          I&apos;m a full-stack developer with a passion for building digital
          solutions that make a difference. I specialize in launching products
          from concept to completion, with skills that span planning, design,
          and solving real-world problems with code. Explore my full portfolio
          of projects{' '}
          <Link as={NextLink} href="/works" scroll={false}>
            here
          </Link>
          .
        </Paragraph>
        <Paragraph>
          Beyond programming, I enjoy photography and traveling. Currently based
          in Minsk, I&apos;m always open to connecting - whether you&apos;re
          interested in collaborating or just grabbing a coffee, feel free to
          reach out!
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Timeline
        </Heading>
        <Box>
          <BioYear>1997</BioYear>
          <Paragraph>&#8226; Born in Minsk, Belarus.</Paragraph>
        </Box>
        <Box>
          <BioYear>2018</BioYear>
          <Paragraph>
            &#8226; Graduated with a Bachelor&apos;s degree in International Law
            from BSU.
          </Paragraph>
          <Paragraph>
            &#8226;{' '}
            <Link href="https://github.com/rolling-scopes/school/blob/gh-pages/2018Q1/Uladzimir_Bachyla.pdf">
              Completed
            </Link>{' '}
            the Rolling Scopes School course.
          </Paragraph>
          <Paragraph>&#8226; Started working at IBA Group.</Paragraph>
        </Box>
        <Box>
          <BioYear>2020</BioYear>
          <Paragraph>
            &#8226; Earned a Bachelor&apos;s degree in Information Science from
            IBA Institute.
          </Paragraph>
        </Box>
        <Box>
          <BioYear>2019 - Present</BioYear>
          <Paragraph>
            &#8226; Working as a full-stack developer at SoftTeco.
          </Paragraph>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find me on
        </Heading>
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Box>
            <Link href="https://github.com/vladimir-bachilo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
          </Box>
          <Box>
            <Link href="https://instagram.com/one.crew" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                Instagram
              </Button>
            </Link>
          </Box>
          <Box>
            <Link href="https://www.linkedin.com/in/bachilo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Linkedin
              </Button>
            </Link>
          </Box>
          <Box>
            <Link
              href="https://open.spotify.com/user/d1dli1di76w482fwy1t47wz5w"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<AiFillSpotify />}
              >
                Spotify
              </Button>
            </Link>
          </Box>
        </Flex>
        <Box pt={'0.7em'}>
          Or mail me at{' '}
          <Link href="mailto:v.bachilo.work@gmail.com" target="_blank">
            v.bachilo.work@gmail.com
          </Link>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
