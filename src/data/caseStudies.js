export const caseStudies = [
  {
    id: "pci-tokenization-platform",
    title: "PCI 4.0 Tokenization & Authorization Platform",
    subtitle: "Built with Python 3, Node.js Lambda Authorizers, Express.js, HTTP API Gateway v2.0 & SAP Systems",
    badge: "PCI DSS 4.0 Production Build",
    category: "Security, Fintech & Cloud Authorization",
    summary: "Engineered an enterprise tokenization and authorization engine enforcing strict PCI DSS 4.0 compliance across banking and energy client applications.",
    metrics: [
      { label: "Compliance Standard", value: "PCI DSS v4.0" },
      { label: "Auth Latency", value: "< 25 ms" },
      { label: "API Gateway Auth", value: "Custom Node Lambda" },
      { label: "Mutual Auth Proxy", value: ".p12 Certificates" }
    ],
    architecture: {
      gateway: "AWS HTTP API Gateway v2.0 with Node.js Lambda Authorizer",
      services: ["Tokenization Engine (Python 3/boto3)", "Express.js Secure SAP Proxy", "JWT Issue & Claims Verifier"],
      database: "Amazon DynamoDB (Token & Session Store)",
      messaging: "AWS SNS / SQS Security Audit Trail",
      devops: "AWS SAM, JWT Token Validation, Mutual TLS (.p12)"
    },
    keyFeatures: [
      "Python-based AWS application integrating third-party tokenization tool for credit card & bank account encoding",
      "Node.js Lambda Authorizer for HTTP API Gateway v2.0 executing PCI DSS 4.0 authorization on inbound requests",
      "Express.js proxy between SAP systems and third-party provider using digitally signed .p12 certificate-based mutual auth",
      "Enforced JWT token generation and claims validation for downstream transaction authorization"
    ],
    codeSnippet: `// Node.js Lambda Authorizer for HTTP API Gateway v2.0 (PCI DSS 4.0)
export const handler = async (event) => {
  const token = event.headers?.authorization?.replace('Bearer ', '');
  if (!token) return { isAuthorized: false };

  try {
    const payload = await verifyJwtClaims(token);
    return {
      isAuthorized: true,
      context: { userId: payload.sub, pciTier: payload.pci_tier }
    };
  } catch (err) {
    return { isAuthorized: false };
  }
};`
  },
  {
    id: "multi-brand-oam-platform",
    title: "Multi-Brand Shared OAM Cloud Platform",
    subtitle: "Built with Java 21, Spring Boot, AWS Lambda, DynamoDB, SQS, SNS & AWS SAM",
    badge: "Cloud Microservices Platform",
    category: "Cloud Native & Microservices",
    summary: "Built a shared private internal cloud platform from scratch serving all client brands, reducing Lambda cold start latency by 50%+ and initial API load times by 67%.",
    metrics: [
      { label: "Cold Start Latency", value: "Reduced by 50%+" },
      { label: "Dashboard Initial Load", value: "6s -> 2s (67% speedup)" },
      { label: "Infrastructure Deployment", value: "100% AWS SAM" },
      { label: "Feature Management", value: "ConfigCat + DynamoDB" }
    ],
    architecture: {
      gateway: "AWS API Gateway with Stage Caching & Router Pattern",
      services: ["Shared Brand Microservices (Java 21/Spring Boot)", "Event-Driven Notification API", "Custom Authorizer Lambda"],
      database: "Amazon DynamoDB & Oracle DB",
      messaging: "AWS SQS & SNS Asynchronous Event Workflows",
      devops: "AWS SAM, Azure DevOps CI/CD, ConfigCat Feature Flags"
    },
    keyFeatures: [
      "Provisioned Concurrency and Router Design Pattern applied across shared Lambda functions to cut cold start latency by 50%+",
      "Developed Event-Driven Notification API triggered on user login, cutting initial dashboard load time from 6s to 2s",
      "JWT-based Custom Authorizer Lambda validating access tokens and JWT claims against DynamoDB",
      "Asynchronous event-driven workflows using SQS, SES, and DynamoDB-backed feature flags via ConfigCat"
    ],
    codeSnippet: `@RestController
@RequestMapping("/api/v1/oam/notifications")
@RequiredArgsConstructor
public class NotificationController {

    private final EventNotificationService notificationService;

    @PostMapping("/login-trigger")
    public ResponseEntity<Void> triggerUserLoginEvent(@AuthenticationPrincipal JwtUser user) {
        // Asynchronously dispatches event notification on user login (cuts load time 6s -> 2s)
        notificationService.publishLoginEventAsync(user.getId());
        return ResponseEntity.accepted().build();
    }
}`
  },
  {
    id: "ecs-microservices-migration",
    title: "Energy Client Microservices Migration & Containerization",
    subtitle: "Built with Spring Boot, AWS ECS on EC2, Application Load Balancer (ALB) & Docker",
    badge: "Legacy Monolith Modernization",
    category: "Containerization & AWS ECS",
    summary: "Re-architected a legacy Tomcat Spring application into containerized Spring Boot microservices deployed on AWS ECS with Application Load Balancer target group routing.",
    metrics: [
      { label: "Architecture Transition", value: "Tomcat Monolith -> ECS" },
      { label: "Routing Management", value: "AWS ALB Target Groups" },
      { label: "Unit Test Coverage", value: "> 85% Mockito" },
      { label: "Deployment Pipeline", value: "Azure DevOps CI/CD" }
    ],
    architecture: {
      gateway: "AWS Application Load Balancer (ALB)",
      services: ["Containerized Spring Boot Microservices", "AWS ECS Fargate / EC2 Tasks"],
      database: "Oracle DB",
      messaging: "AWS SQS / SNS",
      devops: "Docker, Azure DevOps CI/CD, Git, Maven"
    },
    keyFeatures: [
      "Containerized monolithic Spring applications into lightweight Spring Boot microservices",
      "Configured AWS ECS on EC2 instances organized into target groups managed through Application Load Balancers",
      "Written comprehensive unit and integration test coverage using JUnit 5 and Mockito across all Lambda integrations",
      "Collaborated across Agile cross-functional teams (frontend, infra, QA, product) to deliver seamless end-to-end features"
    ],
    codeSnippet: `@SpringBootApplication
@EnableScheduling
public class EnergyServiceApplication {
    public static void main(String[] args) {
        // Containerized Spring Boot service deployed to AWS ECS Fargate target groups
        SpringApplication.run(EnergyServiceApplication.class, args);
    }
}`
  },
  {
    id: "cms-migration-graphql",
    title: "Enterprise AEM CMS GraphQL Integration",
    subtitle: "Built with Java 8/11, AEM CMS, GraphQL, SOAP & REST API Standardisation",
    badge: "Enterprise Modernization",
    category: "CMS & GraphQL Ingestion",
    summary: "Delivered CMS integration layer across 3 enterprise applications (1 B2C, 2 B2B), replacing legacy XML-based APIs with AEM CMS GraphQL queries.",
    metrics: [
      { label: "Apps Integrated", value: "3 Enterprise (1 B2C, 2 B2B)" },
      { label: "Legacy Payload Conversion", value: "XML to JSON" },
      { label: "Regression Rate", value: "< 0.1% Production Downtime" },
      { label: "Query Engine", value: "AEM CMS GraphQL" }
    ],
    architecture: {
      gateway: "Spring Boot REST Gateway",
      services: ["AEM CMS GraphQL Client Integration Layer", "XML to JSON Transformation Engine"],
      database: "Oracle DB with JPA & Hibernate",
      messaging: "REST / SOAP Services",
      devops: "Maven, Tomcat, Jenkins / Azure DevOps"
    },
    keyFeatures: [
      "Replaced legacy XML-based CMS APIs with high-performance AEM CMS GraphQL queries across 3 applications",
      "Standardized all API response formats from XML to JSON with zero regression",
      "Optimized Oracle DB queries, JPA entity mappings, and database schema management",
      "Wrote comprehensive regression test suites ensuring 100% API contract stability"
    ],
    codeSnippet: `public class CmsGraphQLClient {
    private final RestTemplate restTemplate;

    public JsonNode fetchContentFragment(String fragmentId) {
        String query = "{ contentFragment(id: \"" + fragmentId + "\") { title body tags } }";
        // Standardized JSON GraphQL response ingestion
        return restTemplate.postForObject("/content/graphql", new GraphQLRequest(query), JsonNode.class);
    }
}`
  }
];
