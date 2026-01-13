variable "aws_region" {
  default = "us-east-1"
}

variable "app_name" {
  default = "ml-scoring"
}

variable "environment" {
  default = "production"
}

variable "docker_image" {
  default = "yourdockerhubusername/ml-scoring-api"  # Change this
}

variable "app_port" {
  default = 3000
}

variable "app_count" {
  default = 2
}
