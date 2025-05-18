variable "name" {
description = "Name to be used on all resources"
type        = string
default     = ""
}
variable "allowed_account_ids" {
description = "List of allowed AWS account"
type        = list(string)
default     = []
}
