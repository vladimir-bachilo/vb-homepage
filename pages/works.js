import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { Layout } from '../components/layouts/article'
import { Section } from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMelio from '../public/images/works/melio-eyecatch.png'
import thumbVenuePlanner from '../public/images/works/venue-planner-eyecatch.png'
import thumbSoccerStars from '../public/images/works/soccer-stars-eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Collaborations
        <Divider my={6} />
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
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
export { getServerSideProps } from '../components/chakra'
