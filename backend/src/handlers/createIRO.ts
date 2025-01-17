import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandler } from "aws-lambda";

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = "IROs";
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
// IRO Creation Handler
export const createIRO: APIGatewayProxyHandler = async (event) => {
  // Purpose: The `createIRO` function handles incoming HTTP requests from API Gateway to create an Impact-Relevant Operation (IRO) entry.
  //
  // How it works:
  // 1. Parses the incoming request to extract IRO details like `iroId`, `companyId`, `topic`, and `rating`.
  // 2. Validates that the required fields are present in the request.
  // 3. Prepares a data item to be stored in a DynamoDB table.
  // 4. Uses AWS SDK's DocumentClient to insert the item into DynamoDB.
  // 5. Returns a success or error response based on the operation's outcome.

  // The function follows the serverless approach, enabling API Gateway to trigger Lambda, and DynamoDB to serve as a scalable NoSQL data store for IRO records.
  try {
    // Step 1: Parse the request body
    const requestBody = JSON.parse(event.body || "{}");
    const { iroId, companyId, topic, rating, analysisDetails } = requestBody;

    // Step 2: Validate required fields
    if (!iroId || !companyId || !topic || !rating) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }

    // Step 3: Prepare parameters for DynamoDB
    const params = {
      TableName: tableName,
      Item: {
        iroId,
        companyId,
        topic,
        rating,
        analysisDetails,
        createdAt: new Date().toISOString(),
      },
    };

    // Step 4: Insert item into DynamoDB
    // Explanation: The `await` keyword ensures that the code waits for the DynamoDB `put` operation to complete before moving on to the next line. This is important to handle asynchronous operations.
    // The `.promise()` method converts the callback-based DynamoDB operation into a promise-based one, allowing us to use `async/await` syntax for cleaner, more readable code.
    await dynamoDb.put(params).promise();

    // Step 5: Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "IRO created successfully" }),
    };
  } catch (error) {
    // Step 6: Handle errors and return failure response
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
