"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
var error = function (message, statusCode) {
    return JSON.stringify({
        message: message,
        statusCode: statusCode,
    });
};
exports.error = error;
