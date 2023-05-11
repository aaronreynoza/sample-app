resource "google_storage_bucket" "terraform_state" {
  project       = "sample-full-app"
  name          = "sample-full-app-tfstate"
  force_destroy = false
  location      = "US"
  storage_class = "STANDARD"
  versioning {
    enabled = true
  }
}
