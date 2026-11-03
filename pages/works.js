import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { Layout } from '../components/layouts/article'
import { Section } from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbEasternPointTrust from '../public/images/works/ep-trust-company-eyecatch.webp'
import thumbMelio from '../public/images/works/melio-eyecatch.webp'
import thumbVenuePlanner from '../public/images/works/venue-planner-eyecatch.webp'
import thumbSoccerStars from '../public/images/works/soccer-stars-eyecatch.webp'

const Works = () => (
  <Layout title="Works">
    <Container maxW="xxl">
      <Heading as="h3" fontSize={20} mb={4}>
        Collaborations
        <Divider my={6} />
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="eastern-point-trust"
            title="Eastern Point Trust"
            thumbnail={thumbEasternPointTrust}
          >
            End-to-end trust management platform for clients and admins.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="melio" title="Melio" thumbnail={thumbMelio}>
            Intelligent, easy and free accounts payable software.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="venue-planner"
            title="Venue Planner"
            thumbnail={thumbVenuePlanner}
          >
            World&apos;s first smart event planning software.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="soccer-stars"
            title="Soccer Stars"
            thumbnail={thumbSoccerStars}
          >
            Nation&apos;s most popular soccer community website.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Divider my={3} />
    </Container>
  </Layout>
)

export default Works
