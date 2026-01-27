import NextLink from 'next/link'
import { Heading, Box, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/works">
      Works
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={18} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Box borderRadius="lg" overflow="hidden" mb={4} position="relative" w="full" style={{ aspectRatio: '3680/2382' }}>
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: 'cover' }}
      sizes="(max-width: 768px) 100vw, 768px"
    />
  </Box>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2} verticalAlign="none">
    {children}
  </Badge>
)
