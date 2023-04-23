"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var typedi = __importStar(require("typedi"));
var user_route_1 = require("./user/user.route");
var consumer_router_1 = require("./consumer/consumer.router");
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = process.env.PORT;
var dbURL = process.env.DB_URL;
var dbName = process.env.DB_NAME;
mongoose_1.default.connect(dbURL, { dbName: dbName });
mongoose_1.default.connection.on("open", function () {
    console.log("The database is connecting to application");
});
mongoose_1.default.set({ debug: true });
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/user", typedi.Container.get(user_route_1.UserRouter).config());
app.use("/event", typedi.Container.get(consumer_router_1.ConsumerRouter).config());
app.use(function (error, request, response, next) {
    return response.json({ message: error.message });
});
app.listen(port, function () {
    console.log("The server is running at port : ".concat(port));
});
