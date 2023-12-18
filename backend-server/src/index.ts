import express from "express";
import router from "./router/commonRouter";
import dbConnection from "./dbconfig/index";
import cors from "cors";
import bodyParser from "body-parser";

let corsOption = {
    origin: "http://localhost:3000",
};

const app = express();
const PORT = 5000;

app.use(cors(corsOption));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


dbConnection.once("open", () => {
    try {
        console.log("Database connected");
    }
    catch(error) {
        console.log("Something went wrong!")
    }
});

app.listen(PORT, () => {
    try {
        console.log(`Server Running on port: ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    } catch(error) {
        console.log(`Something went wrong!`);
    }
});

app.use("/v1/server", router);