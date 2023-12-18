"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    empid: {
        type: String,
        required: true,
    },
    employeename: {
        type: String,
        required: true,
    },
    emailid: {
        type: String,
        required: true,
    },
    contactno: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
}, {
    timestamps: false,
});
var user = (0, mongoose_1.model)("user", userSchema);
exports.default = user;
