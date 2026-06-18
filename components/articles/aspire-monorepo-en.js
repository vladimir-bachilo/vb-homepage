import { Box, Text, Code, Link, Divider } from '@chakra-ui/react'
import {
  SectionHeading,
  ArticleNote,
  CodeBlock,
  ArticleImage
} from '../article'
import aspireDashboard from '../../public/images/articles/aspire-monorepo/aspire-dashboard.webp'

const ContentEN = () => (
  <Box>
    <Text mb={4}>
      When building a product that has a React admin panel, a React client app,
      and a .NET API all living in the same repository, you quickly run into a
      coordination problem: how do you start all three together, wire up the
      right ports, inject connection strings, and keep local dev fast?
    </Text>
    <Text mb={4}>
      We solved this with{' '}
      <Link
        href="https://learn.microsoft.com/en-us/dotnet/aspire/get-started/aspire-overview"
        isExternal
        color="link-color"
      >
        .NET Aspire
      </Link>
      , a cloud-ready stack from Microsoft designed exactly for multi-project
      orchestration.
    </Text>

    <SectionHeading id="structure">Repository structure</SectionHeading>
    <Text mb={4}>Our monorepo has three top-level folders:</Text>
    <CodeBlock language="bash">{`  admin/      ← Vite + React (internal backoffice)
  client/     ← Vite + React (public-facing app)
  api/        ← ASP.NET Core Web API`}</CodeBlock>
    <Text mb={4}>
      Without a coordinator, each developer has to remember to start three
      processes, set environment variables by hand, and hope the ports
      don&apos;t collide.
    </Text>

    <SectionHeading id="why-aspire">Why Aspire?</SectionHeading>
    <Text mb={4}>
      Aspire adds two thin projects to the solution — an <Code>AppHost</Code>{' '}
      that describes the whole system, and a <Code>ServiceDefaults</Code> that
      wires up telemetry, health checks, and resilience defaults. The AppHost is
      pure C# code, but its job is orchestration, not business logic:
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
      One <Code>aspire run</Code> in the AppHost directory starts all three
      projects. Aspire injects the API base URL into both front-end processes
      automatically through environment variables — no <Code>.env</Code> files
      to maintain per machine.
    </Text>

    <SectionHeading id="dashboard">Built-in dashboard</SectionHeading>
    <Text mb={4}>
      Aspire ships a local developer dashboard at{' '}
      <Code>http://localhost:15888</Code>. It shows every running resource, its
      stdout logs, structured traces across the HTTP calls between the front
      ends and the API, and a metrics view. Debugging a slow endpoint no longer
      means grepping three terminal windows.
    </Text>
    <ArticleImage
      src={aspireDashboard}
      alt="Aspire dashboard"
      caption="Aspire dashboard"
    />

    <SectionHeading id="service-discovery">
      Service discovery without configuration
    </SectionHeading>
    <Text mb={4}>
      The <Code>.WithReference(api)</Code> call in the AppHost does more than
      pass a URL — it registers the API as a named service. On the .NET side,
      the HTTP client factory resolves <Code>https+http://api</Code> to the
      correct address at runtime. In production you swap the Aspire orchestrator
      for a real service registry (Azure Container Apps, Kubernetes) and the
      application code stays unchanged.
    </Text>

    <SectionHeading id="tradeoffs">Trade-offs</SectionHeading>
    <Text mb={4}>
      Aspire is opinionated about the .NET toolchain. The AppHost project
      requires the .NET 8+ SDK, so JavaScript-only contributors need to install
      it even if they never touch the API. For teams already on .NET this is a
      non-issue; for pure front-end teams it adds a small onboarding step.
    </Text>
    <Text mb={4}>
      The tooling is also still maturing — some IDE features (like hot-reload
      across all three projects simultaneously) work best in Visual Studio and
      are patchier in Rider or VS Code.
    </Text>

    <ArticleNote>
      Aspire does not replace Docker Compose for production images. Think of it
      as a <em>developer-experience layer</em> on top of your existing
      deployment pipeline — it handles local orchestration and leaves
      containerisation to you.
    </ArticleNote>

    <SectionHeading id="conclusion">Conclusion</SectionHeading>
    <Text mb={4}>
      For a monorepo with two React apps and one .NET API, Aspire eliminated the
      &quot;which three terminals do I open?&quot; problem, gave us free
      distributed tracing locally, and made service URLs configuration-free. If
      your stack includes at least one .NET project, it is worth the
      fifteen-minute setup cost.
    </Text>
    <Divider my={6} />
  </Box>
)

export default ContentEN
