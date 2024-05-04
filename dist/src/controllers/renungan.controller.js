"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("../../response"));
const renunganService = require("../services/renungan-service");
const getRenunganById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield renunganService.getRenunganById(req.params.id);
        (0, response_1.default)(res, 200, true, data, "OK");
    }
    catch (error) {
        (0, response_1.default)(res, 404, false, null, "Not found");
    }
});
const getRenunganBySeries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const series = req.params.series;
        if (!series)
            throw Error;
        const data = yield renunganService.getRenunganBySeries(series);
        (0, response_1.default)(res, 200, true, data, "OK");
    }
    catch (error) {
        (0, response_1.default)(res, 404, false, null, "Bad request");
    }
});
const getAllRenungan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield renunganService.getAllRenungan();
        (0, response_1.default)(res, 200, true, data, "halo");
    }
    catch (error) {
        (0, response_1.default)(res, 404, false, null, "Bad Request");
    }
});
const addRenungan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = req.body;
        if (!data)
            throw Error;
        const result = yield renunganService.addRenungan(data);
        if (!result)
            throw Error;
        (0, response_1.default)(res, 200, true, null, "Inserted ");
    }
    catch (error) {
        (0, response_1.default)(res, 500, false, null, "Interval server error!");
    }
});
const updateRenungan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        if (!id || !data)
            throw Error;
        const result = yield renunganService.updateRenungan(id, data);
        if (!result)
            throw Error;
        (0, response_1.default)(res, 200, true, null, "Success");
    }
    catch (error) {
        (0, response_1.default)(res, 500, false, null, "Internal server error");
    }
});
const deleteRenungan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id)
            throw Error;
        const result = yield renunganService.deleteRenungan(id);
        if (!result)
            throw Error;
        (0, response_1.default)(res, 200, true, null, "Success");
    }
    catch (error) {
        (0, response_1.default)(res, 500, false, null, "Internal server error");
    }
});
module.exports = {
    getRenunganById,
    getRenunganBySeries,
    getAllRenungan,
    addRenungan,
    updateRenungan,
    deleteRenungan,
};
//# sourceMappingURL=renungan.controller.js.map