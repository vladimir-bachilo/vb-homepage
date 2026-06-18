import { Box, Text, Code, Link, Divider } from '@chakra-ui/react'
import {
  SectionHeading,
  ArticleNote,
  CodeBlock,
  ArticleImage
} from '../article'
import aspireDashboard from '../../public/images/articles/aspire-monorepo/aspire-dashboard.webp'

const ContentRU = () => (
  <Box>
    <Text mb={4}>
      Когда в одном репозитории живут React-панель администратора, React-клиент
      и .NET API, быстро возникает проблема координации: как запустить всё
      вместе, пробросить нужные порты, подставить строки подключения и сохранить
      удобство локальной разработки?
    </Text>
    <Text mb={4}>
      Мы решили это с помощью{' '}
      <Link
        href="https://learn.microsoft.com/ru-ru/dotnet/aspire/get-started/aspire-overview"
        isExternal
        color="link-color"
      >
        .NET Aspire
      </Link>{' '}
      — стека от Microsoft, созданного специально для оркестрации нескольких
      проектов.
    </Text>

    <SectionHeading id="structure">Структура репозитория</SectionHeading>
    <Text mb={4}>Наш монорепозиторий содержит три корневые папки:</Text>
    <CodeBlock language="bash">{`  admin/      ← Vite + React (внутренний бэкофис)
  client/     ← Vite + React (публичное приложение)
  api/        ← ASP.NET Core Web API`}</CodeBlock>
    <Text mb={4}>
      Без координатора каждый разработчик вынужден вручную запускать три
      процесса, задавать переменные окружения и следить, чтобы порты не
      пересекались.
    </Text>

    <SectionHeading id="why-aspire">Почему Aspire?</SectionHeading>
    <Text mb={4}>
      Aspire добавляет к решению два небольших проекта — <Code>AppHost</Code>,
      описывающий всю систему, и <Code>ServiceDefaults</Code>, подключающий
      телеметрию, health-checks и политики retry. AppHost — это чистый C#, но
      его задача — оркестрация, а не бизнес-логика:
    </Text>
    <CodeBlock language="csharp">{`var builder = DistributedApplication.CreateBuilder(args);

var api = builder.AddProject<Projects.Api>("api");

builder.AddNpmApp("admin", "../admin")
       .WithReference(api)
       .WithHttpEndpoint(port: 5174, env: "PORT");

builder.AddNpmApp("client", "../client")
       .WithReference(api)
       .WithHttpEndpoint(port: 5173, env: "PORT");

builder.Build().Run();`}</CodeBlock>
    <Text mb={4}>
      Один <Code>aspire run</Code> в папке AppHost запускает все три проекта.
      Aspire автоматически передаёт базовый URL API в оба фронтенд-процесса
      через переменные окружения — никаких <Code>.env</Code>-файлов на каждой
      машине.
    </Text>

    <SectionHeading id="dashboard">Встроенный дашборд</SectionHeading>
    <Text mb={4}>
      Aspire поставляется с локальным дашбордом на{' '}
      <Code>http://localhost:15888</Code>. Там видны все запущенные ресурсы, их
      логи, структурированные трейсы HTTP-вызовов между фронтендами и API, а
      также метрики. Отладка медленного эндпоинта больше не требует grep в трёх
      терминалах.
    </Text>
    <ArticleImage
      src={aspireDashboard}
      alt="Aspire dashboard"
      caption="Aspire dashboard"
    />

    <SectionHeading id="service-discovery">
      Service discovery без настройки
    </SectionHeading>
    <Text mb={4}>
      Вызов <Code>.WithReference(api)</Code> в AppHost делает больше, чем
      передаёт URL — он регистрирует API как именованный сервис. На стороне .NET
      фабрика HTTP-клиентов разрешает <Code>https+http://api</Code> в нужный
      адрес во время выполнения. В продакшене оркестратор Aspire заменяется
      реальным сервис-реестром (Azure Container Apps, Kubernetes), а код
      приложения остаётся неизменным.
    </Text>

    <SectionHeading id="tradeoffs">Компромиссы</SectionHeading>
    <Text mb={4}>
      Aspire завязан на .NET-тулчейн. Проект AppHost требует SDK .NET 8+,
      поэтому разработчикам, работающим только с JavaScript, придётся его
      установить, даже если они никогда не трогают API. Для команд, уже сидящих
      на .NET, это не проблема; для чисто фронтендовых команд — один лишний шаг
      при онбординге.
    </Text>
    <Text mb={4}>
      Инструментарий ещё развивается: такие фичи, как hot-reload сразу во всех
      трёх проектах, лучше работают в Visual Studio и хуже — в Rider или VS
      Code.
    </Text>

    <ArticleNote>
      Aspire не заменяет Docker Compose для продакшн-образов. Воспринимайте его
      как <em>слой developer experience</em> поверх существующего
      деплой-пайплайна — он берёт на себя локальную оркестрацию и оставляет
      контейнеризацию вам.
    </ArticleNote>

    <SectionHeading id="conclusion">Вывод</SectionHeading>
    <Text mb={4}>
      Для монорепозитория с двумя React-приложениями и одним .NET API Aspire
      устранил вопрос «в каких трёх терминалах мне работать?», обеспечил
      бесплатный распределённый трейсинг локально и сделал URL сервисов
      конфигурируемыми автоматически. Если в вашем стеке есть хотя бы один
      .NET-проект, он стоит пятнадцати минут на первоначальную настройку.
    </Text>
    <Divider my={6} />
  </Box>
)

export default ContentRU
