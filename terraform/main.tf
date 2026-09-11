# Infrastructure as Code (IaC) - AWS ECS Fargate & ALB Architecture
# Provisioned by Senior Java & AWS Cloud Architect

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# 1. VPC & Networking Subnets
resource "aws_vpc" "portfolio_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "Portfolio-Production-VPC"
    Environment = "Production"
    Architect   = "Senior-Java-AWS-Dev"
  }
}

# 2. AWS ECS Cluster for Java 21 Spring Boot Microservice
resource "aws_ecs_cluster" "portfolio_cluster" {
  name = "portfolio-java-backend-cluster"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}

# 3. ECS Task Definition with Fargate (2 vCPU, 4GB RAM for high concurrency)
resource "aws_ecs_task_definition" "java_app_task" {
  family                   = "java-springboot-backend"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "2048"
  memory                   = "4096"
  execution_role_arn       = aws_iam_role.ecs_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_role.arn

  container_definitions = jsonencode([
    {
      name      = "java-api"
      image     = "${var.aws_account_id}.dkr.ecr.${var.aws_region}.amazonaws.com/portfolio-java-api:latest"
      essential = true
      portMappings = [
        {
          containerPort = 8080
          hostPort      = 8080
          protocol      = "tcp"
        }
      ]
      environment = [
        { name = "SPRING_PROFILES_ACTIVE", value = "prod" },
        { name = "JAVA_TOOL_OPTIONS", value = "-XX:+UseG1GC -XX:MaxRAMPercentage=75.0" }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = "/ecs/java-springboot-backend"
          "awslogs-region"        = var.aws_region
          "awslogs-stream-prefix" = "ecs"
        }
      }
    }
  ])
}

# 4. IAM Execution Role
resource "aws_iam_role" "ecs_execution_role" {
  name = "portfolio_ecs_execution_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      }
    ]
  })
}

# 5. IAM Task Role
resource "aws_iam_role" "ecs_task_role" {
  name = "portfolio_ecs_task_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      }
    ]
  })
}
