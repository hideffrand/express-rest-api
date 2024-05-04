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
Object.defineProperty(exports, "__esModule", { value: true });
const renunganRespository = require("../db/renungan.repository");
const getRenunganById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield renunganRespository.getRenunganById(id);
});
const getRenunganBySeries = (series) => __awaiter(void 0, void 0, void 0, function* () {
    return yield renunganRespository.getRenunganBySeries(series);
});
const getAllRenungan = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield renunganRespository.getAllRenungan();
});
const addRenungan = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield renunganRespository.addRenungan(data);
});
const deleteRenungan = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield renunganRespository.deleteRenungan(id);
});
module.exports = {
    getRenunganById,
    getRenunganBySeries,
    getAllRenungan,
    addRenungan,
    deleteRenungan,
};
//# sourceMappingURL=renungan-service.js.map