"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = __importDefault(require("../controller/userController"));
var UserController = new userController_1.default();
var route = (0, express_1.Router)();
route.post("/create", UserController.createUser);
route.put("/update/:id", UserController.updateUser);
route.get("/all", UserController.getAllUser);
route.delete("/delete/:id", UserController.deleteUser);
exports.default = route;
