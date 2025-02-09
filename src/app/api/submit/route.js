import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";

const client = new DynamoDBClient({ region: process.env.AWS_REGION });
const tableName = process.env.DYNAMODB_TABLE; // Set this as an environment variable in Amplify

export async function POST(request) {
    try {
        const submission = await request.json();
        // Prepare an item that includes a generated ID, name, the picks (as JSON), and a timestamp.
        const item = {
            id: { S: uuidv4() },
            name: { S: submission.name },
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
