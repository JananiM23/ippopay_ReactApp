import mongoose from "mongoose";

const url = "mongodb://localhost:27017";
const dbName = "reactApp";

const databaseUrl = `${url}/${dbName}`;

mongoose.connect(databaseUrl).then(() => {
    console.log(`Database connected successfully at: ${databaseUrl}`);
}).catch(() => {
    console.log(`Something went wrong when try to connect in DB`);
});

const dbConn = mongoose.connection;

dbConn.on("disconnected", () => {
    console.log("Database disconnected");
});

export default dbConn;