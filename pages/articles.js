import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { Layout } from '../components/layouts/article'
import { Section } from '../components/section'
import { ArticleGridItem } from '../components/grid-item'

const Articles = () => (
  <Layout title="Articles">
    <Container maxW="xxl">
      <Heading as="h3" fontSize={20} mb={4}>
        Articles
        <Divider my={6} />
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ArticleGridItem
            id="js-the-core"
            title="JavaScript. The Core"
            tag="ECMAScript"
          >
            An overview lecture on ECMAScript programming language and core
            components of its runtime system — covering objects, prototypes,
            closures, execution contexts, and more.
          </ArticleGridItem>
        </Section>
      </SimpleGrid>
      <Divider my={3} />
    </Container>
  </Layout>
)

export default Articles
