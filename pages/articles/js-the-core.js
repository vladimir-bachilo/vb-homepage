import { useState } from 'react'
import {
  Container,
  Box,
  Text,
  Link,
  Button,
  ButtonGroup,
  Divider,
  OrderedList,
  ListItem,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import { Layout } from '../../components/layouts/article'
import { Section } from '../../components/section'
import { ArticleTitle } from '../../components/article'
import ContentEN from '../../components/articles/js-the-core-en'
import ContentRU from '../../components/articles/js-the-core-ru'

const tocEn = [
  { id: 'object', label: 'Object' },
  { id: 'prototype', label: 'Prototype' },
  { id: 'class', label: 'Class' },
  { id: 'execution-context', label: 'Execution context' },
  { id: 'environment', label: 'Environment' },
  { id: 'closure', label: 'Closure' },
  { id: 'this', label: 'This' },
  { id: 'realm', label: 'Realm' },
  { id: 'job', label: 'Job' },
  { id: 'agent', label: 'Agent' }
]

const tocRu = [
  { id: 'object', label: 'Объект' },
  { id: 'prototype', label: 'Прототип' },
  { id: 'class', label: 'Класс' },
  { id: 'execution-context', label: 'Контекст исполнения' },
  { id: 'environment', label: 'Лексическое окружение' },
  { id: 'closure', label: 'Замыкание' },
  { id: 'this', label: 'This' },
  { id: 'realm', label: 'Область кода (Сфера)' },
  { id: 'job', label: 'Задача' },
  { id: 'agent', label: 'Агент' }
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

const JSTheCoreArticle = () => {
  const [lang, setLang] = useState('en')
  const toc = lang === 'en' ? tocEn : tocRu

  return (
    <Layout title="JavaScript. The Core">
      <Container maxW="xxl">
        <Section>
          <ArticleTitle>
            {lang === 'ru' ? 'JavaScript. Ядро' : 'JavaScript. The Core'}
          </ArticleTitle>
          <Box mb={2}>
            <Badge colorScheme="teal" mr={2}>
              ECMAScript
            </Badge>
            <Text as="span" fontSize="sm" color="gray.500">
              · May 1, 2026
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

export default JSTheCoreArticle
