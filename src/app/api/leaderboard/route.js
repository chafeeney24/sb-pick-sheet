import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: process.env.MY_REGION || 'us-east-2' });
const tableName = process.env.DYNAMODB_TABLE; // Use your new table name, e.g., "SubmissionsV2"

export async function GET(request) {
    try {
        const command = new ScanCommand({ TableName: tableName });
        const result = await client.send(command);

        const submissions = result.Items.map(item => ({
            id: item.id.S,             // Primary key is "id"
            userName: item.userName.S, // User's name
            createdAt: item.createdAt.S,
            // Optionally parse picks if you need more details
            picks: JSON.parse(item.picks.S)
        }));

        return new Response(JSON.stringify({ submissions }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("Error retrieving submissions:", error);
        return new Response(
            JSON.stringify({ message: "Error retrieving leaderboard" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" }
            }
        );
    }
}
