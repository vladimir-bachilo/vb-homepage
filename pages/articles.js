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
      <SimpleGrid columns={[1, 1, 2]} gap={6} alignItems="stretch">
        <Section style={{ height: '100%', marginBottom: 0 }}>
          <ArticleGridItem
            id="aspire-monorepo"
            title="Why Aspire Was the Right Choice for Our Monorepo"
            tag=".NET"
          >
            How .NET Aspire solves local orchestration for a monorepo with two
            React apps and one ASP.NET Core API — one command to start
            everything, free distributed tracing, and no .env files.
          </ArticleGridItem>
        </Section>
        <Section style={{ height: '100%', marginBottom: 0 }}>
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
