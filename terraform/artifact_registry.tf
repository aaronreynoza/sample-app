resource "google_artifact_registry_repository" "sample-app" {
  location      = var.region
  repository_id = "sample-full-app-aaron"
  description   = "Docker repository"
  format        = "DOCKER"

  docker_config {
    immutable_tags = true
  }
}
