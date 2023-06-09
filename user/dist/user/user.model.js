"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    credit: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
    _id: true,
    id: false,
});
exports.default = (0, mongoose_1.model)("users", userSchema);
