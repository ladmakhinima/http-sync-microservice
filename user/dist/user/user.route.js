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
exports.UserRouter = void 0;
var express_1 = require("express");
var typedi_1 = require("typedi");
var user_controller_1 = require("./user.controller");
var validation_middleware_1 = require("../middlewares/validation.middleware");
var dtos_1 = require("./dtos");
var UserRouter = exports.UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.router = (0, express_1.Router)();
    }
    UserRouter.prototype.config = function () {
        this.router.post("/", (0, validation_middleware_1.validatorMiddleware)(dtos_1.CreateUserDTO), this.userController.createUserAction.bind(this.userController));
        this.router.get("/", this.userController.findAllUsersAction.bind(this.userController));
        return this.router;
    };
    __decorate([
        (0, typedi_1.Inject)(),
        __metadata("design:type", user_controller_1.UserController)
    ], UserRouter.prototype, "userController", void 0);
    UserRouter = __decorate([
        (0, typedi_1.Service)(),
        __metadata("design:paramtypes", [])
    ], UserRouter);
    return UserRouter;
}());
