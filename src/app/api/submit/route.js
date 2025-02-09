import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";

// Use region from environment or default to us-east-2
const client = new DynamoDBClient({ region: process.env.MY_REGION || 'us-east-2' });
const tableName = process.env.DYNAMODB_TABLE; // Set this to your new table name, e.g., "SubmissionsV2"

export async function POST(request) {
    try {
        console.log("DynamoDB Table Name:", tableName);
        const submission = await request.json();

        // Build the item with the new primary key "id"
        const item = {
            id: { S: uuidv4() },            // Primary key is now "id"
            userName: { S: submission.name }, // Store the user's name in a separate attribute
            picks: { S: JSON.stringify(submission) },
            createdAt: { S: new Date().toISOString() }
        };

        await client.send(
            new PutItemCommand({
                TableName: tableName,
                Item: item
            })
        );

        return new Response(
            JSON.stringify({ message: "Submission received successfully" }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" }
            }
        );
    } catch (error) {
        console.error("Error handling submission:", error);
        return new Response(
            JSON.stringify({ message: "Submission error" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" }
            }
        );
    }
}
