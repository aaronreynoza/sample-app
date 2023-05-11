resource "google_artifact_registry_repository" "sample-app" {
  location      = "us-central1"
  repository_id = "sample-full-app-aaron"
  description   = "Docker repository"
  format        = "DOCKER"

  docker_config {
    immutable_tags = true
  }
}
