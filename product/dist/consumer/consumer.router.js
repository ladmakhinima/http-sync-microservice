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
exports.ConsumerRouter = void 0;
var express_1 = require("express");
var typedi_1 = require("typedi");
var consumer_controller_1 = require("./consumer.controller");
var ConsumerRouter = exports.ConsumerRouter = /** @class */ (function () {
    function ConsumerRouter() {
        this.router = (0, express_1.Router)();
    }
    ConsumerRouter.prototype.config = function () {
        this.router.post("/", this.consumerController.serveEvent.bind(this.consumerController));
        return this.router;
    };
    __decorate([
        (0, typedi_1.Inject)(),
        __metadata("design:type", consumer_controller_1.ConsumerController)
    ], ConsumerRouter.prototype, "consumerController", void 0);
    ConsumerRouter = __decorate([
        (0, typedi_1.Service)(),
        __metadata("design:paramtypes", [])
    ], ConsumerRouter);
    return ConsumerRouter;
}());
