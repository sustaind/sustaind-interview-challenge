import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandler } from "aws-lambda";

const dynamoDb = new DynamoDB.DocumentClient();
const feedbackTable = "StakeholderFeedback";

export const getFeedbackForIRO: APIGatewayProxyHandler = async (event) => {
  try {
    const { iroId } = event.pathParameters || {};

    if (!iroId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing IRO ID" }),
      };
    }

    const params = {
      TableName: feedbackTable,
      IndexName: "iroId-index", // Secondary index on `iroId`
      KeyConditionExpression: "iroId = :iroId",
      ExpressionAttributeValues: {
        ":iroId": iroId,
      },
    };

    const result = await dynamoDb.query(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ feedback: result.Items }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
