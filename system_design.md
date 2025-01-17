# System Design Diagrams

## High-Level Architecture

```mermaid
graph TD
    A[AWS Amplify <br> (React Frontend UI)]
    A --> B[AWS API Gateway]
    A --> C[Amazon Cognito (Auth)]
    B --> D[AWS Lambda (Backend)]
    D --> E[Amazon DynamoDB (Data Storage)]
    D --> F[Amazon S3 (Storage) <br> (Generated Reports)]
    E --> G[AWS CloudWatch (Monitoring)]
    F --> G
    D --> |"IRO Creation, Analysis, Stakeholder Feedback"| F




graph TD
    A[Stakeholder ↔ Stakeholder Portal (React UI or CLI)]
    A --> B[AWS API Gateway]
    B --> C[AWS Lambda Functions]
    C --> D[DynamoDB (IROs)]
    C --> E[DynamoDB (Stakeholder Feedback)]
