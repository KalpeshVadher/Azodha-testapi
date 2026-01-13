variable "app_name" {
  default = "ml-api"
}

variable "docker_image" {
  description = "Docker Hub image"
  default     = "dockerhub_username/ml-api:latest"
}
