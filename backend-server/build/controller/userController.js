"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userService_1 = __importDefault(require("../service/userService"));
var http_status_codes_1 = __importDefault(require("http-status-codes"));
var ApiResponseHandler_1 = require("../middleware/ApiResponseHandler");
var UserService = new userService_1.default();
var userController = /** @class */ (function () {
    function userController() {
        var _this = this;
        this.createUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var data, userData, status, messge, resultData, error_1, status, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = req.body;
                        return [4 /*yield*/, UserService.createUser(data).then(function (data) {
                                var responseData = data;
                                if (!responseData) {
                                    return "Error";
                                }
                                else {
                                    return responseData;
                                }
                            })];
                    case 1:
                        userData = _a.sent();
                        status = http_status_codes_1.default.OK;
                        messge = "User details created successfully";
                        resultData = userData;
                        res.json((0, ApiResponseHandler_1.returnSuccess)(status, messge, resultData));
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        status = http_status_codes_1.default.BAD_REQUEST;
                        message = "Something went wrong";
                        res.json((0, ApiResponseHandler_1.returnError)(status, message));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getAllUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var data, status, message, responseData, error_2, status, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, UserService.getAllUser().then(function (data) {
                                return data;
                            })];
                    case 1:
                        data = _a.sent();
                        status = http_status_codes_1.default.OK;
                        message = "All user details listed";
                        responseData = data;
                        res.json((0, ApiResponseHandler_1.returnSuccess)(status, message, responseData));
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        status = http_status_codes_1.default.BAD_REQUEST;
                        message = "Something went wrong!--Error while retrieve the data";
                        res.json((0, ApiResponseHandler_1.returnError)(status, message));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.updateUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userId, data, checkUserId, status, message, updateDetail, status, message, status, message, response, error_3, status, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        userId = req.params.id;
                        data = req.body;
                        return [4 /*yield*/, UserService.getUserId(userId).then(function (data) {
                                return data;
                            })];
                    case 1:
                        checkUserId = _a.sent();
                        if (!!checkUserId) return [3 /*break*/, 2];
                        status = http_status_codes_1.default.FORBIDDEN;
                        message = "Invalid user";
                        res.json((0, ApiResponseHandler_1.returnError)(status, message));
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, UserService.updateUser(userId, data).then(function (data) {
                            return data;
                        })];
                    case 3:
                        updateDetail = _a.sent();
                        if (!updateDetail) {
                            status = http_status_codes_1.default.FORBIDDEN;
                            message = "Error when updating record";
                            res.json((0, ApiResponseHandler_1.returnError)(status, message));
                        }
                        else {
                            status = http_status_codes_1.default.OK;
                            message = "User details updated successfully";
                            response = updateDetail;
                            res.json((0, ApiResponseHandler_1.returnSuccess)(status, message, response));
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        status = http_status_codes_1.default.BAD_REQUEST;
                        message = "Something went wrong!";
                        res.json((0, ApiResponseHandler_1.returnError)(status, message));
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.deleteUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userId, checkUserId, status, message, userData, status, message, status, message, responseData, error_4, status, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        userId = req.params.id;
                        return [4 /*yield*/, UserService.getUserId(userId).then(function (data) {
                                return data;
                            })];
                    case 1:
                        checkUserId = _a.sent();
                        if (!checkUserId) {
                            status = http_status_codes_1.default.FORBIDDEN;
                            message = "invalied user";
                            res.json((0, ApiResponseHandler_1.returnError)(status, message));
                        }
                        return [4 /*yield*/, UserService.deleteUser(userId).then(function (data) {
                                return data;
                            })];
                    case 2:
                        userData = _a.sent();
                        if (!userData) {
                            status = http_status_codes_1.default.FORBIDDEN;
                            message = "Error comes in delete user data";
                            res.json((0, ApiResponseHandler_1.returnError)(status, message));
                        }
                        else {
                            status = http_status_codes_1.default.OK;
                            message = "User details deleted";
                            responseData = { id: userId };
                            res.json((0, ApiResponseHandler_1.returnSuccess)(status, message));
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        status = http_status_codes_1.default.INTERNAL_SERVER_ERROR;
                        message = "Server internal error";
                        res.json((0, ApiResponseHandler_1.returnError)(status, message));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
    }
    return userController;
}());
exports.default = userController;
