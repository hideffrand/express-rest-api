"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SendResponse = (res, statusCode, successStatus, data, message) => {
    res.status(statusCode).json({
        data: data,
        message: message,
        success: successStatus,
    });
};
exports.default = SendResponse;
//# sourceMappingURL=response.js.map