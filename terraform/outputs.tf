output "alb_dns_name" {
  value       = aws_lb.app.dns_name
  description = "DNS name of the Application Load Balancer"
}

output "ecs_cluster_name" {
  value       = aws_ecs_cluster.main.name
  description = "ECS Cluster name"
}

output "ecs_service_name" {
  value       = aws_ecs_service.app.name
  description = "ECS Service name"
}

output "cloudwatch_dashboard_url" {
  value = "https://${var.aws_region}.console.aws.amazon.com/cloudwatch/home?region=${var.aws_region}#dashboards:name=${aws_cloudwatch_dashboard.main.dashboard_name}"
  description = "CloudWatch Dashboard URL"
}
