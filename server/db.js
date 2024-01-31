import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const connectionString = process.env.CONNECTION_URL;

const mongoConnection = async () => {
  const client = new MongoClient(connectionString);

  try {
    await client.connect();
    console.log("Database connected successfully");
    return client;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error; // Re-throw the error to indicate a failed connection
  }
};

// Export a promise that resolves to the connected client
export const client = mongoConnection();

// Example usage in another file:
// import { clientPromise } from "./yourDatabaseModule";
// (async () => {
//   const client = await clientPromise;
//   // Now you can use the connected client
// })();

//initializing DB
// export const client = await mongoConnection();
