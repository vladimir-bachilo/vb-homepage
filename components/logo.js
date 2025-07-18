import Link from 'next/link'
import { Text, Box, useColorModeValue } from '@chakra-ui/react'
import { LaptopCode } from './icons/laptop-code'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

export const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <LaptopCode />
        <Box ml={1}>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
          >
            Vladimir Bachilo
          </Text>
        </Box>
      </LogoBox>
    </Link>
  )
}
