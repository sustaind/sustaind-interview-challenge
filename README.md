# CSRD Double Materiality Reporting System

This project is a cloud-native application designed to help companies comply with the CSRD (Corporate Sustainability Reporting Directive) by facilitating the Double Materiality reporting process. It enables companies to create, analyze, and rate impact-relevant operations (IROs), integrate stakeholder feedback, and generate comprehensive sustainability reports.

---

## Requirement Analysis

### **Understanding Double Materiality in CSRD Reporting**
To build a compliant CSRD report, companies must go through several stages:

1. **Topic Selection**: Identifying and customizing key sustainability topics (e.g., carbon emissions, social impact).
2. **IRO (Impact Relevance Operations)**: Performing analyses and ratings for each selected topic.
3. **Stakeholder Integration**: Allowing stakeholders to provide feedback on the company’s performance across these topics.
4. **Report Generation**: Generating a comprehensive sustainability report.

### **Feature Selection for Technical Depth**
I would focus on implementing the **IRO Operations** feature, including:
- Creation, analysis, and rating of impact-relevant topics.
- Stakeholder feedback integration.

**Why this feature is crucial according to me**:
- It builds upon Topic Selection.
- It involves core business logic for assessing impact and financial materiality.
- It supports stakeholder feedback and continuous improvement.

---

## Key Requirements for the System

| **Requirement**                   | **Description**                                                                 |
|-----------------------------------|---------------------------------------------------------------------------------|
| IRO Creation                      | Users can create and save IROs with relevant details.                          |
| Analysis and Rating               | Automated processing of IROs based on predefined criteria.                     |
| Stakeholder Feedback Integration  | Stakeholders can provide ratings and comments on IROs.                         |
| Scalability                       | The system should handle large datasets efficiently.                           |
| Secure Authentication             | Ensure secure access using Amazon Cognito.                                     |
| Report Generation                 | Generate sustainability reports in various formats (e.g., PDF, CSV).           |

---

### **Assumptions**
- Users can customize the list of sustainability topics.
- The system integrates stakeholder feedback for analysis.
- AWS cloud services will be leveraged for scalability and reliability.

### **Constraints**
- **Compliance**: Must adhere to CSRD reporting requirements.
- **Security**: Ensure data integrity and privacy, especially for sensitive company data.
- **Scalability**: Handle large datasets for multinational companies.

### **Risks**
| **Risk**                 | **Mitigation Strategy**                                                                 |
|--------------------------|-----------------------------------------------------------------------------------------|
| Data Loss                | Implement backups and monitoring for DynamoDB and S3.                                   |
| Unauthorized Access      | Use Amazon Cognito for secure user authentication.                                      |
| System Downtime          | Use AWS CloudWatch for monitoring and automated alerts.                                 |
| Poor Performance         | Optimize Lambda functions and database queries for high performance.                    |

---

## System Architecture Design for CSRD Double Materiality Reporting

### **Overview**
The system is designed as a cloud-native application using AWS services to ensure scalability, security, and compliance. The primary focus is on the **IRO Operations** feature.

---

### **High-Level Architecture Diagram**
#### **Components and AWS Services**
- **Frontend**: React-based UI hosted on AWS Amplify.
- **API Layer**: AWS API Gateway for managing API endpoints.
- **Backend Services**: Serverless functions using AWS Lambda.
- **Database**: Amazon DynamoDB for storing topics, analyses, and stakeholder feedback.
- **Authentication**: Amazon Cognito for user management and secure access.
- **Storage**: Amazon S3 for storing generated reports.
- **Monitoring**: AWS CloudWatch for logging and performance monitoring.

#### **Component Descriptions**
1. **Frontend (React UI on AWS Amplify)**:
   - Users can:
     - Select sustainability topics.
     - Create and analyze IRO operations.
     - View reports and integrate stakeholder feedback.
   - **Tools**: React, Material UI, AWS Amplify.

2. **API Layer (AWS API Gateway)**:
   - Acts as the entry point for all API requests from the frontend.
   - Ensures secure communication between the frontend and backend.

3. **Backend Services (AWS Lambda)**:
   - The core business logic includes:
     - **IRO Creation**: Enabling users to create impact-relevant operations.
     - **Analysis & Rating**: Performing automated analyses and ratings based on predefined criteria.
     - **Stakeholder Feedback**: Allowing stakeholders to provide input on the company's performance.
   - **Tools**: Node.js (TypeScript), AWS Lambda.

4. **Database (Amazon DynamoDB)**:
   - Stores topics, analyses, ratings, and stakeholder feedback.
   - NoSQL database for high availability and low-latency performance.

5. **Authentication (Amazon Cognito)**:
   - Manages user authentication and secure access to the system.

6. **Storage (Amazon S3)**:
   - Stores generated CSRD reports in various formats (PDF, CSV).

7. **Monitoring (AWS CloudWatch)**:
   - Provides logging, monitoring, and alerting for system performance.

---

### **Data Flow**
1. **User Authentication**: Users log in via Cognito.
2. **Topic Selection**: Users select or customize topics via the UI.
3. **IRO Creation**: Users create IRO operations via the UI.
4. **Analysis & Rating**: Backend processes and rates the operations.
5. **Stakeholder Feedback**: Stakeholders provide feedback via a secure link.
6. **Report Generation**: The system generates a report and stores it in S3.

---

## Stakeholder Integration Design

### **Purpose**
Stakeholder integration allows stakeholders to:
- Review and comment on the IROs created by a company.
- Provide ratings (e.g., 1-5 stars) based on their evaluation of the IRO's effectiveness and relevance.
- Securely log feedback tied to specific IROs for future reference or reports.

### **Components**
1. **Frontend**:
   - **Stakeholder Portal**: A minimal web UI or CLI for stakeholders to:
     - View a list of assigned IROs.
     - Submit feedback and ratings.
     - View their historical submissions.

2. **Backend**:
   - **API Gateway**: Manages APIs for stakeholders to interact with the system.
   - **Lambda Functions**:
     - **GetIROsForStakeholder**: Fetch assigned IROs for a stakeholder.
     - **SubmitFeedback**: Allow stakeholders to submit feedback and ratings.
     - **GetFeedbackForIRO**: Retrieve all feedback for an IRO.
   - **DynamoDB**:
     - **StakeholderFeedback Table**: Stores feedback tied to specific IROs.

---

### **Next Steps (Not functional, just a dummy)**
1. **Frontend Integration**:
   - Expose endpoints `/feedback` and `/iro/{iroId}/feedback` in the React UI.
   - Use **Material UI** for user-friendly components.

2. **UI Components**:
   - **Feedback Form Component**: For stakeholders to submit feedback.
   - **Feedback List Component**: To display submitted feedback.

3. **Integrate Components**:
   - Use the above components in the main IRO page or dashboard.

---

### **How to Run**
1. Clone this repository.
2. Install dependencies for each folder (backend and frontend): `npm install`.
3. For backend run - tsc src/handlers/createIRO.ts (to generate javascript file) . Then node src/handlers/createIRO.js
3. Start the React frontend: `npm start` (nothing functional, still work in progress.).
