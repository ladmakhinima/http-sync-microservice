"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var queue_1 = __importDefault(require("./queue"));
var services = [
    "http://localhost:4000",
    "http://localhost:5000",
    "http://localhost:6000",
];
var router = (0, express_1.Router)();
router.post("/publish", function (request, response) {
    var payload = request.body;
    Promise.all(services.map(function (service) { return (0, queue_1.default)({ service: service, payload: payload }); }));
    return response.status(200).json({ message: "send successfully ..." });
});
exports.default = router;
