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
exports.UserService = void 0;
var typedi_1 = require("typedi");
var user_model_1 = __importDefault(require("./user.model"));
var UserService = exports.UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.create = function (data) {
        return new user_model_1.default({ credit: data.credit, userId: data.userId }).save();
    };
    UserService.prototype.findById = function (id) {
        return user_model_1.default.findById(id);
    };
    UserService = __decorate([
        (0, typedi_1.Service)()
    ], UserService);
    return UserService;
}());
