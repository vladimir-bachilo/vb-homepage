import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Divider,
  Heading,
  Center,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import { Paragraph } from '../../components/paragraph'
import { Layout } from '../../components/layouts/article'

const Work = () => (
  <Layout title="Melio">
    <Container>
      <Title>
        Melio <Badge>2019-</Badge>
      </Title>
      <Paragraph>
        Melio allows businesses to manage their B2B payments and receivables
        digitally. It offers a single, integrated solution that allows
        businesses to make and receive payments – helping with cash flow needs,
        reducing or eliminating late payment costs, and saving time spent on
        administrative payment-related tasks. I joined the project to work on a
        huge list of features they are developing.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://meliopayments.com/">
            https://meliopayments.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            ReactJS / Redux / NodeJS / TypeScript / React Query / Postmark / AWS
            / Datadog / Athena / Coralogix / Sentry / Lottie / Jenkins / Chakra
            UI
          </span>
        </ListItem>
        <ListItem>
          <Meta>Press room</Meta>
          <Link href="https://meliopayments.com/press-room/">
            https://meliopayments.com/press-room/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://thefinancialtechnologyreport.com/the-top-100-financial-technology-companies-of-2023/">
            <Badge mr={2}>The Financial TR</Badge>
            The Top 100 Financial Technology Companies of 2023
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://www.businesswire.com/news/home/20231023277793/en/">
            <Badge mr={2}>Businesswire</Badge>
            Fiserv and Melio Partner to Streamline Accounts Payable and
            Receivable for Small Businesses
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/melio-01.png" alt="Melio" />
      <WorkImage src="/images/works/melio-02.png" alt="Melio" />
      <Divider my={3} />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
