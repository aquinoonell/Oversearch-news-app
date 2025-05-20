provider "aws" {
  region = "us-east-2"
}

## S3_Bucket

module "s3_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = "my-s3-bucket"
  acl    = "private"

  control_object_ownership = true
  object_ownership         = "ObjectWriter"

  versioning = {
    enable = true
  }

}

## Lambda (store packages on S3)

module "lambda_function" {
  source = "terraform-aws-modules/lambda/aws"

  function_name = "lambda-with-layer"
  description   = "My lambda function"
  handler       = "index.lmabda_handler"
  runtime       = "python3.12"
  publish       = true

}
