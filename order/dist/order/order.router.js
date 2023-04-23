"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
var typedi_1 = require("typedi");
var order_controller_1 = require("./order.controller");
var express_1 = require("express");
var validation_middleware_1 = require("../middlewares/validation.middleware");
var dtos_1 = require("./dtos");
var OrderRouter = exports.OrderRouter = /** @class */ (function () {
    function OrderRouter() {
        this.router = (0, express_1.Router)();
    }
    OrderRouter.prototype.config = function () {
        this.router.post("/", (0, validation_middleware_1.validatorMiddleware)(dtos_1.SubmitOrderDTO), this.orderController.submitOrderAction.bind(this.orderController));
        this.router.get("/", this.orderController.findAllOrdersAction.bind(this.orderController));
        return this.router;
    };
    __decorate([
        (0, typedi_1.Inject)(),
        __metadata("design:type", order_controller_1.OrderController)
    ], OrderRouter.prototype, "orderController", void 0);
    OrderRouter = __decorate([
        (0, typedi_1.Service)(),
        __metadata("design:paramtypes", [])
    ], OrderRouter);
    return OrderRouter;
}());
