import * as cdk from "aws-cdk-lib";

export class CdkAwsStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  }
}
