package com.portfolio.service;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.HashMap;

@Service
public class CostCalculationEngine {

    public Map<String, Object> calculateEstimate(String workloadType, long dailyRequests, boolean multiAZ) {
        double baseCost = 85.0;
        double costPer100k = 0.85;
        String stack = "Java 21 Virtual Threads, Spring Boot 3, Amazon Aurora PostgreSQL, AWS ECS Fargate";
        String sla = "99.99% Target Uptime with Auto-scaling";

        if ("serverless".equalsIgnoreCase(workloadType)) {
            baseCost = 15.0;
            costPer100k = 0.35;
            stack = "AWS Lambda (Java 21 SnapStart), API Gateway, DynamoDB, EventBridge";
            sla = "99.95% Availability with Zero Idle Costs";
        } else if ("telemetry".equalsIgnoreCase(workloadType)) {
            baseCost = 140.0;
            costPer100k = 1.20;
            stack = "Java 21, AWS MSK / Kinesis Streams, Redis Cache, AWS ECS Fargate";
            sla = "Sub-second Event Processing Latency";
        }

        double reqIn100k = (dailyRequests * 30.0) / 100000.0;
        double totalMonthlyCost = baseCost + (reqIn100k * costPer100k);

        if (multiAZ) {
            totalMonthlyCost *= 1.45;
        }

        Map<String, Object> response = new HashMap<>();
        response.put("monthlyEstimateUsd", Math.round(totalMonthlyCost));
        response.put("recommendedStack", stack);
        response.put("slaTarget", sla);
        response.put("calculatedBy", "Spring Boot 3 / Java 21 Engine");
        response.put("engineTimestamp", System.currentTimeMillis());

        return response;
    }
}
