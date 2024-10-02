import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import { Paragraph } from '../../components/paragraph'
import { Layout } from '../../components/layouts/article'

const Work = () => (
  <Layout title="Venue Planner">
    <Container>
      <Title>
        Venue Planner <Badge>2018-2019</Badge>
      </Title>
      <Paragraph>
        Venue planner is the world&apos;s first smart event planning software,
        that offers integrated safety and security planning in an intuitive,
        visually driven and auditable programme.
      </Paragraph>
      <Paragraph>I worked on the web UI and backend.</Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://venue-planner.com/en/">
            https://venue-planner.com/en/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            ReactJS / MobX / TypeScript / D3JS / ThreeJS / Webpack / PostCSS
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/venue-planner-01.png" alt="Melio" />
      <Divider my={3} />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
