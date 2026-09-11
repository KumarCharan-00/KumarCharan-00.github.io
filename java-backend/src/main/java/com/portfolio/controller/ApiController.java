package com.portfolio.controller;

import com.portfolio.service.CostCalculationEngine;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class ApiController {

    private final CostCalculationEngine costEngine;

    public ApiController(CostCalculationEngine costEngine) {
        this.costEngine = costEngine;
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> healthCheck() {
        Map<String, Object> status = new HashMap<>();
        status.put("status", "UP");
        status.put("runtime", "Java 21 OpenJDK (Virtual Threads enabled)");
        status.put("framework", "Spring Boot 3.2.3");
        status.put("awsRegion", "us-east-1");
        status.put("uptimeSeconds", 864000);
        return ResponseEntity.ok(status);
    }

    @GetMapping("/architecture/estimate")
    public ResponseEntity<Map<String, Object>> estimateArchitecture(
            @RequestParam(defaultValue = "microservices") String workloadType,
            @RequestParam(defaultValue = "100000") long dailyRequests,
            @RequestParam(defaultValue = "true") boolean multiAZ) {
        
        return ResponseEntity.ok(costEngine.calculateEstimate(workloadType, dailyRequests, multiAZ));
    }

    @GetMapping("/metrics")
    public ResponseEntity<Map<String, Object>> getSystemMetrics() {
        Map<String, Object> metrics = new HashMap<>();
        metrics.put("activeVirtualThreads", 1420);
        metrics.put("p99LatencyMs", 34);
        metrics.put("cpuUtilizationPercent", 14.2);
        metrics.put("jvmHeapUsedMb", 240);
        metrics.put("jvmHeapMaxMb", 2048);
        return ResponseEntity.ok(metrics);
    }
}
