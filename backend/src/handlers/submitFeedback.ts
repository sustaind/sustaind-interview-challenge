import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandler } from "aws-lambda";
import { v4 as uuidv4 } from "uuid";

// DynamoDB client
const dynamoDb = new DynamoDB.DocumentClient();
const feedbackTable = "StakeholderFeedback"; // Can also be stored in a .env file

export const submitFeedback: APIGatewayProxyHandler = async (event) => {
  try {
    const requestBody = JSON.parse(event.body || "{}");
    const { iroId, stakeholderId, rating, comments } = requestBody;

    if (!iroId || !stakeholderId || rating === undefined || !comments) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }

    const feedbackId = uuidv4();
    const params = {
      TableName: feedbackTable,
      Item: {
        feedbackId,
        iroId,
        stakeholderId,
        rating,
        comments,
        submittedAt: new Date().toISOString(),
      },
    };

    await dynamoDb.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Feedback submitted successfully",
        feedbackId,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
