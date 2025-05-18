provider "aws" {
  region = "us-east-2"


}

terraform {
  backend "s3" {
    key = "none"
  }
}

module "alb" {
  source = "terraform-aws/alb/aws"
  version = "~> 6.0"

}
