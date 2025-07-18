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
import { Title, WorkImage, Meta } from '../../components/work'
import { Paragraph } from '../../components/paragraph'
import { Layout } from '../../components/layouts/article'

const Work = () => (
  <Layout title="Melio">
    <Container maxW="xxl">
      <Title>
        Melio <Badge>2019-Present</Badge>
      </Title>
      <Paragraph>
        Melio enables businesses to streamline their B2B payments and
        receivables through a fully digital platform. It provides an all-in-one
        solution for sending and receiving payments, helping to optimize cash
        flow, minimize late payment fees, and reduce the time spent on
        administrative tasks. I joined the project to contribute to the
        development of an extensive list of new features.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://meliopayments.com/">
            https://meliopayments.com/
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
            / Datadog / Coralogix / Sentry / FullStory / Lottie / Jenkins /
            Chakra UI
          </span>
        </ListItem>
        <ListItem>
          <Meta>Press room</Meta>
          <Link href="https://meliopayments.com/press-room/">
            https://meliopayments.com/press-room/
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={17} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://www.usatoday.com/money/blueprint/business/finance/best-free-accounting-software/">
            <Badge mr={2} verticalAlign="none">
              USA Today
            </Badge>
            Best Free Accounting Software in 2024
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://thefinancialtechnologyreport.com/the-top-100-financial-technology-companies-of-2023/">
            <Badge mr={2} verticalAlign="none">
              The Financial TR
            </Badge>
            The Top 100 Financial Technology Companies of 2023
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://www.businesswire.com/news/home/20231023277793/en/">
            <Badge mr={2} verticalAlign="none">
              Businesswire
            </Badge>
            Fiserv and Melio Partner to Streamline Accounts Payable and
            Receivable for Small Businesses
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
