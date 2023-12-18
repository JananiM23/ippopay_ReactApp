"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var commonRouter_1 = __importDefault(require("./router/commonRouter"));
var index_1 = __importDefault(require("./dbconfig/index"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var corsOption = {
    origin: "http://localhost:3000",
};
var app = (0, express_1.default)();
var PORT = 5000;
app.use((0, cors_1.default)(corsOption));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
index_1.default.once("open", function () {
    try {
        console.log("Database connected");
    }
    catch (error) {
        console.log("Something went wrong!");
    }
});
app.listen(PORT, function () {
    try {
        console.log("Server Running on port: ".concat(PORT));
        console.log("http://localhost:".concat(PORT));
    }
    catch (error) {
        console.log("Something went wrong!");
    }
});
app.use("/v1/server", commonRouter_1.default);
