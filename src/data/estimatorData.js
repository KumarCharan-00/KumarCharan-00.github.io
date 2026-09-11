export const estimatorModels = {
  microservices: {
    name: "Containerized Microservices (AWS ECS Fargate)",
    baseCost: 85, // base cluster, ALB, VPC NAT Gateways
    per100kReq: 0.85,
    recommendedStack: "Java 21 Virtual Threads, Spring Boot 3, Amazon Aurora PostgreSQL, AWS ECS Fargate, ALB",
    sla: "99.99% Uptime with Auto-scaling (2 to 10 Tasks)",
    architectureNote: "Ideal for enterprise business logic, complex domain models, and high sustained request throughput."
  },
  serverless: {
    name: "Cloud-Native Serverless Engine (AWS Lambda + DynamoDB)",
    baseCost: 15, // base API Gateway & minimal storage
    per100kReq: 0.35,
    recommendedStack: "AWS Lambda (Java 21 SnapStart), API Gateway, DynamoDB, EventBridge, SQS",
    sla: "99.95% Availability with Zero Idle Costs",
    architectureNote: "Best for variable traffic, event-driven webhooks, startup MVPs, and cost minimization at lower volume."
  },
  telemetry: {
    name: "Real-Time Event & Data Pipeline (AWS Kinesis + Kafka)",
    baseCost: 140, // MSK / Kinesis Shards + OpenSearch
    per100kReq: 1.20,
    recommendedStack: "Java 21, AWS MSK / Kinesis Streams, Redis Cache, AWS ECS Fargate, OpenSearch",
    sla: "Sub-second Event Stream Latency & P99 Telemetry Guarantees",
    architectureNote: "Engineered for real-time analytics, iot data ingestion, financial ticker feeds, and log processing."
  }
};

export function calculateAwsCost(workloadType, dailyRequests, multiAZ) {
  const model = estimatorModels[workloadType] || estimatorModels.microservices;
  const reqIn100k = (dailyRequests * 30) / 100000;
  let estimatedMonthlyCost = model.baseCost + (reqIn100k * model.per100kReq);
  
  if (multiAZ) {
    estimatedMonthlyCost *= 1.45; // 45% addition for multi-AZ redundant database & dual NAT gateways
  }

  return {
    monthlyEstimate: Math.round(estimatedMonthlyCost),
    recommendedStack: model.recommendedStack,
    sla: model.sla,
    architectureNote: model.architectureNote
  };
}
