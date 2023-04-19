terraform {
 backend "gcs" {
   bucket  = "contra-application-tfstate"
   prefix  = "terraform/state"
 }
}
