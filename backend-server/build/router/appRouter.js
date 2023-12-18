"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appController_1 = __importDefault(require("../controller/appController"));
var router = (0, express_1.Router)();
var controller = new appController_1.default();
router.get("/appResponse", controller.welcome);
exports.default = router;
