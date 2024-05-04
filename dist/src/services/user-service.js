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
const bcrypt = require("bcrypt");
const userRepository = require("../db/user.repository");
const checkUserExistence = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const userIsExists = yield userRepository.getUser(username);
    return userIsExists ? true : false;
});
const verifyUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userRepository.getUser(email);
        if (!user)
            throw Error;
        const isMatched = yield bcrypt.compare(password, user.password);
        if (!isMatched)
            throw Error;
        return true;
    }
    catch (error) {
        return false;
    }
});
const addUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userIsExists = yield checkUserExistence(data.username);
    if (userIsExists)
        return false;
    const res = yield userRepository.addUser(data);
    if (res) {
        return true;
    }
    return false;
});
const updateUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userIsExists = yield checkUserExistence(data.username);
    if (!userIsExists)
        return null;
    const result = yield userRepository.updateUser(data);
    if (!result)
        return null;
    return result;
});
module.exports = {
    addUser,
    updateUser,
    verifyUser,
};
//# sourceMappingURL=user-service.js.map