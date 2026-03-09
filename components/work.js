import NextLink from 'next/link'
import { Heading, Box, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { useState } from 'react'

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

export const WorkImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      mb={4}
      position="relative"
      w="full"
      style={{ aspectRatio: '3680/2382' }}
    >
      {!loaded && (
        <Box
          position="absolute"
          inset={0}
          zIndex={1}
          sx={{
            background:
              'linear-gradient(90deg, var(--shimmer-base) 25%, var(--shimmer-highlight) 50%, var(--shimmer-base) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.6s infinite',
            '--shimmer-base': 'rgba(128,128,128,0.08)',
            '--shimmer-highlight': 'rgba(128,128,128,0.18)',
            '@keyframes shimmer': {
              '0%': { backgroundPosition: '200% 0' },
              '100%': { backgroundPosition: '-200% 0' },
            },
          }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: 'cover',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
        sizes="(max-width: 768px) 100vw, 768px"
        onLoad={() => setLoaded(true)}
      />
    </Box>
  )
}

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2} verticalAlign="none">
    {children}
  </Badge>
)
