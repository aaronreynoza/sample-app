resource "google_service_account" "gke_sa" {
  account_id   = "gke-service-account"
  display_name = "GKE cluster SA"
}

resource "google_service_account" "demo_app" {
  account_id   = "demo-app-service-account"
  display_name = "Sample backend API service Account"
}

resource "google_project_iam_member" "demo_app_role" {
  role   = "roles/iam.workloadIdentityUser"
  project = var.project_id
  member = "serviceAccount:${var.project_id}.svc.id.goog[demo/sample-demo-app]"
}
