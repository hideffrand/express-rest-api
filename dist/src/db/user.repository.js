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
const supabase = require("../libs/supabase/init");
const logger = require("../libs/logger");
const USER_TABLE_NAME = process.env.USER_TABLE_NAME;
const getUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase
        .from(USER_TABLE_NAME)
        .select("email, username, password")
        .eq("username", username);
    if (error) {
        logger.error("Failed to get user's data.", error);
    }
    if (data) {
        logger.info(data);
        return data;
    }
    return null;
});
const addUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield supabase.from(USER_TABLE_NAME).insert(data);
        return true;
    }
    catch (error) {
        logger.error(error.message);
        return false;
    }
});
const updateUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = yield supabase
        .from(USER_TABLE_NAME)
        .update(data)
        .eq("email", data.email);
    if (error)
        return null;
    const updatedUser = yield getUser(data.email);
    return updatedUser;
});
module.exports = {
    getUser,
    addUser,
    updateUser,
};
//# sourceMappingURL=user.repository.js.map