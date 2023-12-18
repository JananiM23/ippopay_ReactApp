"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appRouter_1 = __importDefault(require("./appRouter"));
var userRoute_1 = __importDefault(require("./userRoute"));
var router = (0, express_1.Router)();
var defaultRoute = [
    {
        path: "/app",
        route: appRouter_1.default,
    },
    {
        path: "/user",
        route: userRoute_1.default,
    }
];
defaultRoute.forEach(function (route) {
    router.use(route.path, route.route);
});
exports.default = router;
