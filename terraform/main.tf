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

  store_on_s3 = true
  s3_bucket   = "my-bucket-id-with-lambda-build"

  layers = [
    module.lambda_layer_s3.lambda_layer_arn,
  ]

  environment_varibles = {
    Serverless = "Terraform"    

  }

  tags = {
    Module = "lambda-with-layer"
  }


}


