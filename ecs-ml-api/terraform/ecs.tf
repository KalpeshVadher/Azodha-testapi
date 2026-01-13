resource "aws_ecs_cluster" "cluster" {
  name = "ml-api-cluster"
}

resource "aws_ecs_task_definition" "task" {
  family                   = "ml-api"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = 256
  memory                   = 512
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn

  container_definitions = jsonencode([
    {
      name      = "ml-api"
      image     = var.docker_image
      essential = true
      portMappings = [
        {
          containerPort = 3000
        }
      ]
    }
  ])
}

resource "aws_ecs_service" "service" {
  name            = "ml-api"
  cluster         = aws_ecs_cluster.cluster.id
  task_definition = aws_ecs_task_definition.task.arn
  desired_count   = 2
  launch_type     = "FARGATE"

  network_configuration {
    subnets         = data.aws_subnets.public.ids
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.tg.arn
    container_name   = "ml-api"
    container_port   = 3000
  }
}
