"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController = require("../controllers/user.controller");
router.post("/signup", userController.signUp);
// router.post("/login", userController.login);
// router.post("/signout", userController.signOut);
module.exports = router;
//# sourceMappingURL=user.route.js.map