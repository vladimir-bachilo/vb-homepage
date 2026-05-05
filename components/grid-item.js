import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'

export const ArticleGridItem = ({ children, id, title, tag, href }) => {
  const cardBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')
  const cardBgHover = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const descColor = useColorModeValue('gray.600', 'gray.400')
  const target = href || `/articles/${id}`
  return (
    <Box w="100%">
      <LinkBox as={NextLink} href={target} scroll={false} cursor="pointer">
        <Box
          borderRadius="lg"
          p={5}
          bg={cardBg}
          border="1px solid"
          borderColor={borderColor}
          _hover={{ bg: cardBgHover }}
          transition="background 0.2s"
        >
          {tag && (
            <Badge colorScheme="teal" mb={2}>
              {tag}
            </Badge>
          )}
          <LinkOverlay as="div" href={target}>
            <Text fontSize={18} fontWeight="semibold" mt={1}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14} color={descColor} mt={2}>
            {children}
          </Text>
        </Box>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)
