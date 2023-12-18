"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnError = exports.returnSuccess = void 0;
var logger_1 = __importDefault(require("./logger"));
var returnSuccess = function (statusCode, message, data) {
    var response = {
        statusCode: statusCode,
        response: {
            status: true,
            message: message,
            data: data
        }
    };
    var loggerResponse = {
        statusCode: statusCode,
        status: true,
        message: message
    };
    logger_1.default.info(loggerResponse);
    return response;
};
exports.returnSuccess = returnSuccess;
var returnError = function (statusCode, message) {
    var response = {
        statusCode: statusCode,
        response: {
            status: false,
            message: message
        }
    };
    var loggerResponse = {
        statusCode: statusCode,
        status: false,
        message: message
    };
    logger_1.default.error(loggerResponse);
    return response;
};
exports.returnError = returnError;
