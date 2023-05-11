resource "google_sql_database_instance" "cloudsql" {
  name             = "main-instance"
  database_version = "POSTGRES_14"
  region           = var.region

  settings {
    tier = "db-f1-micro"

    location_preference {
      zone = var.zone
    }

  }
}

resource "google_sql_database" "database" {
  name     = "demo-app"
  instance = google_sql_database_instance.cloudsql.name
}

resource "google_sql_user" "users" {
  name     = "demo-app"
  instance = google_sql_database_instance.cloudsql.name
  password = "changeme"
}