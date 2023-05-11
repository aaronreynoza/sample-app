resource "google_project_iam_binding" "artifactory_reader_binding" {
  role       = "roles/artifactregistry.reader"
  project    = var.project_id
  members    = [
    "serviceAccount:${google_service_account.gke_sa.email}",
  ]
  depends_on = [google_service_account.gke_sa]
}

resource "google_project_iam_binding" "demo_app_cloudsql_binding" {
  for_each = toset([
    "roles/cloudsql.client",
    "roles/logging.logWriter",
  ])
  role = each.key
  project    = var.project_id
  members    = [
    "serviceAccount:${google_service_account.demo_app.email}",
  ]
  depends_on = [google_service_account.demo_app]
}


resource "google_project_iam_member" "storage-role" {
  project = var.project_id
  role    = "roles/storage.admin"
  member  = "serviceAccount:${google_service_account.demo_app.email}"
}
