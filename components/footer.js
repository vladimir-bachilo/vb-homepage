import { Box } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Vladimir Bachilo. All Rights Reserved.
    </Box>
  )
}
