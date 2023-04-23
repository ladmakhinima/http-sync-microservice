"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
var typedi_1 = require("typedi");
var order_model_1 = __importDefault(require("./order.model"));
var OrderService = exports.OrderService = /** @class */ (function () {
    function OrderService() {
    }
    OrderService.prototype.submitOrder = function (data) {
        return new order_model_1.default({
            userId: data.userId,
            productId: data.productId,
            quantity: data.quantity,
            finalAmount: 0,
        }).save();
    };
    OrderService.prototype.findAllOrders = function () {
        return order_model_1.default.find();
    };
    OrderService = __decorate([
        (0, typedi_1.Service)()
    ], OrderService);
    return OrderService;
}());
