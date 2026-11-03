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
  <Layout title="Eastern Point Trust">
    <Container maxW="xxl">
      <Title>
        Eastern Point Trust <Badge>2025-Present</Badge>
      </Title>
      <Paragraph>
        The Eastern Point Trust platform centralizes all trust operations,
        streamlines critical workflows, and significantly improves both
        client-facing and internal administrative experiences. It serves as the
        core operational foundation for managing and processing every trust
        product offered by Eastern Point Trust.
      </Paragraph>
      <Paragraph>
        I developed both the <b>Client Portal</b> and the <b>Admin Platform</b>{' '}
        from scratch, enabling secure end-to-end trust management, document
        processing, account administration, reporting, and workflow automation.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.easternpointtrust.com/" target="_blank">
            https://www.easternpointtrust.com/
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            .NET / ASP.NET Core / Aspire / Entity Framework Core / PostgreSQL /
            Redis / Azure / SignalR / React / TypeScript / TanStack Query /
            Axios / Zustand / Lodash / MUI / Vite / Turborepo / Playwright
          </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={17} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link
            href="https://natlawreview.com/press-releases/eastern-point-trust-company-unveils-revolutionary-ai-powered-fiduciary"
            target="_blank"
          >
            <Badge mr={2} verticalAlign="none">
              The National Law Review
            </Badge>
            Eastern Point Trust Company Unveils AI-Powered Fiduciary Assistant
            in ChatGPT
          </Link>
        </ListItem>

        <ListItem>
          <Link
            href="https://dfns.co/article/announcing-eastern-point-trust"
            target="_blank"
          >
            <Badge mr={2} verticalAlign="none">
              Dfns
            </Badge>
            Eastern Point Trust Chooses Dfns for Digital Asset Custody and
            Escrow
          </Link>
        </ListItem>

        <ListItem>
          <Link
            href="https://markets.financialcontent.com/worldnow.wgem/article/marketersmedia-2025-3-12-eastern-point-trust-company-to-enhance-qsf-360-platform-with-new-capabilities"
            target="_blank"
          >
            <Badge mr={2} verticalAlign="none">
              MarketersMedia
            </Badge>
            Eastern Point Trust Company Enhances QSF 360 Platform with J.P.
            Morgan Treasury Services
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage
        src="/images/works/ep-trust-company-01.webp"
        alt="Eastern Point Trust"
      />
      <Divider my={3} />
    </Container>
  </Layout>
)

export default Work
