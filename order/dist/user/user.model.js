"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userOrderSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    credit: {
        type: Number,
        required: true,
    },
}, { id: false, _id: true, timestamps: true });
exports.default = (0, mongoose_1.model)("userOrders", userOrderSchema);
