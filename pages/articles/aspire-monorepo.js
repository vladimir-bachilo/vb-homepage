import { useState } from 'react'
import {
  Container,
  Box,
  Text,
  Button,
  ButtonGroup,
  Divider,
  OrderedList,
  ListItem,
  Link,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import { Layout } from '../../components/layouts/article'
import { Section } from '../../components/section'
import { ArticleTitle } from '../../components/article'
import ContentEN from '../../components/articles/aspire-monorepo-en'
import ContentRU from '../../components/articles/aspire-monorepo-ru'

const tocEn = [
  { id: 'structure', label: 'Repository structure' },
  { id: 'why-aspire', label: 'Why Aspire?' },
  { id: 'dashboard', label: 'Built-in dashboard' },
  { id: 'service-discovery', label: 'Service discovery' },
  { id: 'tradeoffs', label: 'Trade-offs' },
  { id: 'conclusion', label: 'Conclusion' }
]

const tocRu = [
  { id: 'structure', label: 'Структура репозитория' },
  { id: 'why-aspire', label: 'Почему Aspire?' },
  { id: 'dashboard', label: 'Встроенный дашборд' },
  { id: 'service-discovery', label: 'Service discovery' },
  { id: 'tradeoffs', label: 'Компромиссы' },
  { id: 'conclusion', label: 'Вывод' }
]

const LangSwitch = ({ lang, setLang }) => (
  <ButtonGroup size="sm" isAttached mb={6}>
    <Button
      colorScheme="teal"
      variant={lang === 'en' ? 'solid' : 'outline'}
      onClick={() => setLang('en')}
    >
      EN
    </Button>
    <Button
      colorScheme="teal"
      variant={lang === 'ru' ? 'solid' : 'outline'}
      onClick={() => setLang('ru')}
    >
      RU
    </Button>
  </ButtonGroup>
)

const TableOfContents = ({ toc, lang }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const bg = useColorModeValue('whiteAlpha.600', 'whiteAlpha.50')
  return (
    <Box
      p={4}
      mb={8}
      borderRadius="md"
      border="1px solid"
      borderColor={borderColor}
      bg={bg}
    >
      <Text
        fontWeight="semibold"
        mb={2}
        fontSize="sm"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        {lang === 'ru' ? 'Содержание' : 'Contents'}
      </Text>
      <OrderedList spacing={1} pl={2}>
        {toc.map(item => (
          <ListItem key={item.id} fontSize="sm">
            <Link href={`#${item.id}`} color="link-color">
              {item.label}
            </Link>
          </ListItem>
        ))}
      </OrderedList>
    </Box>
  )
}

const AspireMonorepoArticle = () => {
  const [lang, setLang] = useState('en')
  const toc = lang === 'en' ? tocEn : tocRu

  return (
    <Layout title="Why Aspire Was the Right Choice for Our Monorepo">
      <Container maxW="xxl">
        <Section>
          <ArticleTitle>
            {lang === 'ru'
              ? 'Почему мы используем Aspire для монорепозитория'
              : 'Why We Chose Aspire for Our Monorepo Architecture'}
          </ArticleTitle>
          <Box mb={2}>
            <Badge colorScheme="purple" mr={2}>
              .NET
            </Badge>
            <Badge colorScheme="blue" mr={2}>
              Aspire
            </Badge>
            <Text as="span" fontSize="sm" color="gray.500">
              · June 18, 2026
            </Text>
          </Box>
          <Divider my={4} />
          <LangSwitch lang={lang} setLang={setLang} />
          <TableOfContents toc={toc} lang={lang} />
          {lang === 'en' ? <ContentEN /> : <ContentRU />}
        </Section>
      </Container>
    </Layout>
  )
}

export default AspireMonorepoArticle
