## Stakeholder Portal Diagram

```mermaid
graph TD
    A[Stakeholder ↔ Stakeholder Portal - React UI or CLI]
    A --> B[AWS API Gateway]
    B --> C[AWS Lambda Functions]
    C --> D[DynamoDB - IROs]
    C --> E[DynamoDB - Stakeholder Feedback]