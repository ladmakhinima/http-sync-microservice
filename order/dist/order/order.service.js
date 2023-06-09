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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
var typedi_1 = require("typedi");
var order_model_1 = __importDefault(require("./order.model"));
var product_service_1 = require("../product/product.service");
var user_service_1 = require("../user/user.service");
var error_creator_helper_1 = require("../helper/error-creator.helper");
var OrderService = exports.OrderService = /** @class */ (function () {
    function OrderService() {
    }
    OrderService.prototype.submitOrder = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var user, product, finalAmount, newOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.findById(data.userId)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new Error((0, error_creator_helper_1.error)("user not found", 404));
                        }
                        return [4 /*yield*/, this.productService.findById(data.productId)];
                    case 2:
                        product = _a.sent();
                        if (!product) {
                            throw new Error((0, error_creator_helper_1.error)("product not found", 404));
                        }
                        if (product.productQuantity === 0) {
                            throw new Error((0, error_creator_helper_1.error)("product is unavailable", 400));
                        }
                        finalAmount = product.productPrice * data.quantity;
                        if (user.credit < finalAmount) {
                            throw new Error((0, error_creator_helper_1.error)("not enough credit", 400));
                        }
                        return [4 /*yield*/, new order_model_1.default({
                                userId: data.userId,
                                productId: data.productId,
                                quantity: data.quantity,
                                finalAmount: finalAmount,
                            }).save()];
                    case 3:
                        newOrder = _a.sent();
                        return [4 /*yield*/, this.userService.updateCredit(data.userId, user.credit - finalAmount)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.productService.updateQuantity(data.productId, product.productQuantity - data.quantity)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, newOrder];
                }
            });
        });
    };
    OrderService.prototype.findAllOrders = function () {
        return order_model_1.default.find();
    };
    __decorate([
        (0, typedi_1.Inject)(),
        __metadata("design:type", product_service_1.ProductService)
    ], OrderService.prototype, "productService", void 0);
    __decorate([
        (0, typedi_1.Inject)(),
        __metadata("design:type", user_service_1.UserService)
    ], OrderService.prototype, "userService", void 0);
    OrderService = __decorate([
        (0, typedi_1.Service)()
    ], OrderService);
    return OrderService;
}());
