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
exports.ProductService = void 0;
var typedi_1 = require("typedi");
var product_model_1 = __importDefault(require("./product.model"));
var ProductService = exports.ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.create = function (data) {
        return new product_model_1.default({
            productId: data.productId,
            productPrice: data.productPrice,
            productQuantity: data.productQuantity,
        }).save();
    };
    ProductService.prototype.findById = function (id) {
        return product_model_1.default.findById(id);
    };
    ProductService.prototype.updateQuantity = function (_id, productQuantity) {
        return product_model_1.default.updateOne({ _id: _id }, { $set: { productQuantity: productQuantity } });
    };
    ProductService = __decorate([
        (0, typedi_1.Service)()
    ], ProductService);
    return ProductService;
}());
