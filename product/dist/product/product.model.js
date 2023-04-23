"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    title: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    quantity: {
        required: true,
        type: Number,
    },
    price: {
        required: true,
        type: Number,
    },
}, {
    timestamps: true,
    id: false,
    _id: true,
});
exports.default = (0, mongoose_1.model)("products", productSchema);
