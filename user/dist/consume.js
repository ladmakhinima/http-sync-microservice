"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.post("/", function (request, response) {
    var body = request.body;
    console.log(body);
    return response.json({ message: "salam" });
});
exports.default = router;
