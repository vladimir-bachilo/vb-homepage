import { useState, useEffect } from 'react'
import { Box, IconButton, useColorModeValue } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { motion, AnimatePresence } from 'framer-motion'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bg = useColorModeValue('whiteAlpha.800', 'rgba(26,26,26,0.8)')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Box display={{ base: 'none', md: 'block' }}>
      <AnimatePresence>
        {visible && (
          <motion.div
            style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 10 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <IconButton
              aria-label="Scroll to top"
              icon={<ArrowUpIcon />}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              borderRadius="full"
              size="md"
              bg={bg}
              borderWidth="1px"
              borderColor={borderColor}
              backdropFilter="blur(10px)"
              boxShadow="md"
              _hover={{
                bg: 'teal.400',
                borderColor: 'teal.400',
                color: 'white',
                boxShadow: 'lg'
              }}
              transition="all 0.2s"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default ScrollToTop
