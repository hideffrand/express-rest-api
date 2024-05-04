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
const firestore_1 = require("firebase/firestore");
const init_1 = require("../libs/firebase/init");
const logger = require("../libs/logger");
const crypto = require("crypto");
const RENUNGAN_COLLECTION_NAME = "renungan-1";
const getRenunganById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = (0, firestore_1.doc)(init_1.firestore, RENUNGAN_COLLECTION_NAME, id);
        const res = yield (0, firestore_1.getDoc)(docRef);
        if (!res.exists())
            throw Error;
        if (!res.data())
            throw Error;
        return Object.assign({}, res.data());
    }
    catch (error) {
        return null;
    }
});
const getRenunganBySeries = (series) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const renunganRef = (0, firestore_1.collection)(init_1.firestore, RENUNGAN_COLLECTION_NAME);
        const q = (0, firestore_1.query)(renunganRef, (0, firestore_1.where)("series", "==", series));
        const querySnapshot = yield (0, firestore_1.getDocs)(q);
        const renunganList = querySnapshot.docs.map((doc) => (Object.assign({ id: doc.id }, doc.data())));
        return renunganList;
    }
    catch (error) {
        return [];
    }
});
const addRenungan = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newId = crypto.randomUUID().slice(0, 5);
        const docRef = (0, firestore_1.doc)(init_1.firestore, RENUNGAN_COLLECTION_NAME, newId);
        yield (0, firestore_1.setDoc)(docRef, data);
        return true;
    }
    catch (error) {
        return null;
    }
});
const updateRenungan = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = (0, firestore_1.doc)(init_1.firestore, RENUNGAN_COLLECTION_NAME, id);
        yield (0, firestore_1.updateDoc)(docRef, data);
        return true;
    }
    catch (error) {
        return null;
    }
});
const deleteRenungan = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = (0, firestore_1.doc)(init_1.firestore, RENUNGAN_COLLECTION_NAME, id);
        yield (0, firestore_1.deleteDoc)(docRef);
        return true;
    }
    catch (error) {
        return null;
    }
});
const getAllRenungan = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = [];
        const querySnapshot = yield (0, firestore_1.getDocs)((0, firestore_1.collection)(init_1.firestore, RENUNGAN_COLLECTION_NAME));
        querySnapshot.forEach((doc) => {
            data.push(Object.assign({ id: doc.id }, doc.data()));
        });
        return data;
    }
    catch (error) {
        return [];
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
//# sourceMappingURL=renungan.repository.js.map