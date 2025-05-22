variable "allowed_account_ids" {
  description = "List of allowed AWS account"
  type        = list(string)
  default     = []
}
variable "name" {
  description = "Name to be used on all resources"
  type        = string
  default     = ""
}
variable "cidr" {
  description = ""
  type        = string
  default     = "0.0.0.0/0"
}
variable "azs" {
  description = "A list of avaliability zones in the region"
  type        = list(string)
  default     = []
}
variable "public_subnets" {
  description = "A list of public subnets"
  type        = list(string)
  default     = []
}

