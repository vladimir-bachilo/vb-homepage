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
  <Layout title="Soccer Stars">
    <Container>
      <Title>
        Soccer Stars <Badge>2018</Badge>
      </Title>
      <Paragraph>
        Soccer Stars is the nation&apos;s leading children&apos;s soccer program
        for ages 1 to 12+. The program focuses on helping kids develop their
        soccer skills and improve gross motor coordination. Expert coaches
        create a fun, non-competitive, and educational environment, ensuring
        that each child builds self-confidence and essential physical literacy
        in every session.
      </Paragraph>
      <Paragraph>
        In the past, I&apos;ve developed a design system and website.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://soccerstars.com/">
            https://soccerstars.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            JavaScript / HTML / CSS / jQuery / Webpack / Flickity / Slick JS
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/soccer-stars-01.png" alt="Soccer Stars" />
      <Divider my={3} />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
