import { Analytics } from '@vercel/analytics/react'
import { Layout } from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import { Chakra } from '../components/chakra'
import { SpeedInsights } from '@vercel/speed-insights/next'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Analytics />
        <SpeedInsights />
      </Layout>
    </Chakra>
  )
}

export default Website
