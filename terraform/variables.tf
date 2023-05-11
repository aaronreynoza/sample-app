variable "project_id" {
  description = "project id"
}

variable "zone" {
  description = "zone in the choosen region"
}

variable "region" {
  description = "region for the app to be allocated"
}

variable "gke_num_nodes" {
  default     = 1
  description = "number of gke nodes"
}

variable "gke_machine_type" {
  default     = "n1-standard-4"
  description = "Compute engine machine type"
}