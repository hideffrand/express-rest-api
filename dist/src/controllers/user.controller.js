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
const logger = require("../libs/logger");
const userService = require("../services/user-service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, username, password } = req.headers;
        if (!email || !username || !password) {
            throw new Error("Email, username, or password is missing!");
        }
        const salt = yield bcrypt.genSalt(SALT_ROUNDS);
        const hashedPassword = yield bcrypt.hash(password, salt);
        const result = yield userService.addUser({
            username: username,
            email: email,
            password: hashedPassword,
        });
        if (!result)
            throw new Error("Username already exist");
        (0, response_1.default)(res, 200, true, {
            username: username,
            email: email,
        }, "Successfully created new user!");
    }
    catch (error) {
        (0, response_1.default)(res, 400, false, null, error.message);
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.headers;
    const isMatched = yield userService.verifyUser(username, password);
    if (isMatched) {
        res.cookie("userId", username, { maxAge: 3600000, httpOnly: true }); // Cookie expires in 1 hour
        (0, response_1.default)(res, 200, true, null, "login success");
    }
    (0, response_1.default)(res, 401, false, null, "failed to login");
});
const signOut = (req, res) => {
    const userId = req.cookies.userId;
    if (userId) {
        res.clearCookie("userId");
        (0, response_1.default)(res, 200, true, null, "signed out successfully");
    }
    (0, response_1.default)(res, 401, false, null, "no user logged in");
};
module.exports = {
    login,
    signOut,
    signUp,
};
//# sourceMappingURL=user.controller.js.map