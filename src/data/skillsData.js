/* ──────────────────────────────────────────────────────────────
   Skills Data — Balanced across Java, Python, AWS & DevOps
   Icon keys must match ICON_MAP in SkillsMatrix.jsx
   ────────────────────────────────────────────────────────────── */
export const skillsCategories = [
  {
    category: 'Java & Enterprise Applications',
    icon: 'Coffee',
    color: '#7B42C4',
    skills: [
      { name: 'Java 21 / Jakarta EE',      exp: '4+ Yrs',  tag: 'Production Core' },
      { name: 'Spring Boot 3.x',            exp: '4+ Yrs',  tag: 'Enterprise' },
      { name: 'Spring MVC / WebFlux',       exp: '4+ Yrs',  tag: 'REST APIs' },
      { name: 'Spring Data JPA / Hibernate',exp: '4+ Yrs',  tag: 'ORM' },
      { name: 'Microservices Architecture', exp: '4+ Yrs',  tag: 'System Design' },
      { name: 'Event-Driven (Kafka / SQS)', exp: '4+ Yrs',  tag: 'Async' },
      { name: 'gRPC / REST / GraphQL',      exp: '4+ Yrs',  tag: 'API Design' },
      { name: 'Maven / Gradle',             exp: '4+ Yrs',  tag: 'Build Tooling' },
    ],
  },
  {
    category: 'Python & AI / ML Engineering',
    icon: 'Terminal',
    color: '#E8392B',
    skills: [
      { name: 'Python 3.11+',               exp: '3+ Yrs',  tag: 'Core' },
      { name: 'LlamaIndex',                 exp: '1+ Yr',   tag: 'RAG Pipelines' },
      { name: 'LLM Agents / Workflows',     exp: '1+ Yr',   tag: 'Autonomous' },
      { name: 'boto3 / AWS SDK',            exp: '3+ Yrs',  tag: 'AWS Integration' },
      { name: 'FastAPI / Flask',            exp: '2+ Yrs',  tag: 'APIs' },
      { name: 'OpenAI API / Anthropic',     exp: '1+ Yr',   tag: 'LLM' },
      { name: 'Pandas / NumPy',             exp: '2+ Yrs',  tag: 'Data Processing' },
      { name: 'LangChain',                  exp: '1+ Yr',   tag: 'Agentic AI' },
    ],
  },
  {
    category: 'AWS Cloud & Serverless',
    icon: 'Cloud',
    color: '#F9BE00',
    skills: [
      { name: 'AWS Lambda',                 exp: '4+ Yrs',  tag: 'Serverless' },
      { name: 'API Gateway (HTTP v2)',       exp: '4+ Yrs',  tag: 'REST / WebSocket' },
      { name: 'Amazon ECS / Fargate',       exp: '4+ Yrs',  tag: 'Containers' },
      { name: 'DynamoDB',                   exp: '4+ Yrs',  tag: 'NoSQL' },
      { name: 'SQS / SNS',                  exp: '4+ Yrs',  tag: 'Messaging' },
      { name: 'SAM / CloudFormation',       exp: '4+ Yrs',  tag: 'IaC' },
      { name: 'S3 / CloudFront',            exp: '4+ Yrs',  tag: 'Storage & CDN' },
      { name: 'CloudWatch / X-Ray',         exp: '4+ Yrs',  tag: 'Observability' },
    ],
  },
  {
    category: 'DevOps, Databases & Security',
    icon: 'Cpu',
    color: '#10b981',
    skills: [
      { name: 'PostgreSQL / Oracle DB',     exp: '3+ Yrs',  tag: 'RDBMS' },
      { name: 'Docker / Docker Compose',    exp: '3+ Yrs',  tag: 'Containers' },
      { name: 'GitHub Actions / CI-CD',     exp: '2+ Yrs',  tag: 'Pipelines' },
      { name: 'PCI DSS 4.0 Compliance',     exp: '2+ Yrs',  tag: 'Security' },
      { name: 'Node.js / Express.js',       exp: '2+ Yrs',  tag: 'Lambda Auth' },
      { name: 'Redis / Elasticache',        exp: '2+ Yrs',  tag: 'Caching' },
      { name: 'JWT / mTLS / OAuth 2.0',     exp: '3+ Yrs',  tag: 'Auth & Identity' },
      { name: 'Terraform (basic)',           exp: '1+ Yr',   tag: 'IaC' },
    ],
  },
];
