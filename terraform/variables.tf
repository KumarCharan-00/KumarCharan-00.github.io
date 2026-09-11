variable "aws_region" {
  description = "AWS region for infrastructure deployment"
  type        = string
  default     = "us-east-1"
}

variable "aws_account_id" {
  description = "AWS Account ID for ECR registry"
  type        = string
  default     = "123456789012"
}

variable "environment" {
  description = "Deployment target environment"
  type        = string
  default     = "production"
}
