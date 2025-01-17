# High-Level Architecture

```mermaid
graph TD
    A[AWS Amplify - React Frontend UI]
    A --> B[AWS API Gateway]
    A --> C[Amazon Cognito - Auth]
    B --> D[AWS Lambda - Backend]
    D --> E[Amazon DynamoDB - Data Storage]
    D --> F[Amazon S3 Storage - Generated Reports]
    E --> G[AWS CloudWatch - Monitoring]
    F --> G
    D --> |"IRO Creation, Analysis, Stakeholder Feedback"| F

