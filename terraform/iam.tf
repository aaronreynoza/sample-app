resource "google_service_account" "gke_sa" {
  account_id   = "gke-service-account"
  display_name = "GKE cluster SA"
}

resource "google_project_iam_binding" "artifactory_reader_binding" {
  role       = "roles/artifactregistry.reader"
  project    = var.project_id
  members    = [
    "serviceAccount:${google_service_account.gke_sa.email}",
  ]
  depends_on = [google_service_account.gke_sa]
}