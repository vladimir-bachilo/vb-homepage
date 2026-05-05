import NextLink from 'next/link'
import Image from 'next/image'
import { Heading, Box, Text, Link, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import {
  oneLight,
  oneDark
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

SyntaxHighlighter.registerLanguage('javascript', javascript)

export const ArticleTitle = ({ children }) => (
  <Box mb={4}>
    <Link as={NextLink} href="/articles">
      Articles
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={18} mb={0}>
      {children}
    </Heading>
  </Box>
)

export const SectionHeading = ({ id, children }) => (
  <Heading
    as="h2"
    id={id}
    fontSize={32}
    mt={10}
    mb={4}
    pt={2}
    pb={2}
    borderBottom="2px solid"
    borderColor="grassTeal"
    style={{ scrollMarginTop: '80px' }}
  >
    {children}
  </Heading>
)

export const Definition = ({ children }) => {
  const bg = useColorModeValue('teal.50', 'rgba(136,204,202,0.08)')
  return (
    <Box
      p={4}
      my={4}
      borderRadius="md"
      borderLeft="4px solid"
      borderColor="grassTeal"
      bg={bg}
    >
      {children}
    </Box>
  )
}

export const ArticleNote = ({ children }) => {
  const bg = useColorModeValue('orange.50', 'rgba(237,137,54,0.07)')
  return (
    <Box
      p={3}
      my={3}
      borderRadius="md"
      borderLeft="3px solid"
      borderColor="orange.300"
      bg={bg}
      fontSize="sm"
    >
      {children}
    </Box>
  )
}

export const CodeBlock = ({ children, language = 'javascript' }) => {
  const style = useColorModeValue(oneLight, oneDark)
  return (
    <SyntaxHighlighter
      language={language}
      style={style}
      showLineNumbers
      customStyle={{
        borderRadius: '6px',
        borderLeft: '3px solid #88ccca',
        fontSize: '13px',
        lineHeight: 1.6,
        margin: '16px 0'
      }}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export const ArticleImage = ({ src, alt, caption, maxW = '600px' }) => (
  <Box my={6} textAlign="center">
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      style={{
        maxWidth: maxW,
        width: '100%',
        height: 'auto',
        borderRadius: '6px',
        display: 'block',
        margin: '0 auto'
      }}
    />
    {caption && (
      <Text fontSize="sm" color="gray.500" mt={2} fontStyle="italic">
        {caption}
      </Text>
    )}
  </Box>
)
