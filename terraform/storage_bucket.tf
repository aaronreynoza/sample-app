resource "google_storage_bucket" "default" {
  project       = "contra-application"
  name          = "contra-application-tfstate"
  force_destroy = false
  location      = "US"
  storage_class = "STANDARD"
  versioning {
    enabled = true
  }
}
