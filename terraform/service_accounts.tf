resource "google_service_account" "gke_sa" {
  account_id   = "gke-service-account"
  display_name = "GKE cluster SA"
}