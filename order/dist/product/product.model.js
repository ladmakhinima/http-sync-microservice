"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productOrderSchema = new mongoose_1.Schema({
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    productQuantity: {
        type: Number,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
}, { id: false, _id: true, timestamps: true });
exports.default = (0, mongoose_1.model)("productOrders", productOrderSchema);
