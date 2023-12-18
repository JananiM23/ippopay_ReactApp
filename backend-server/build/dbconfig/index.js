"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var url = "mongodb://localhost:27017";
var dbName = "reactApp";
var databaseUrl = "".concat(url, "/").concat(dbName);
mongoose_1.default.connect(databaseUrl).then(function () {
    console.log("Database connected successfully at: ".concat(databaseUrl));
}).catch(function () {
    console.log("Something went wrong when try to connect in DB");
});
var dbConn = mongoose_1.default.connection;
dbConn.on("disconnected", function () {
    console.log("Database disconnected");
});
exports.default = dbConn;
