import { Router } from "express";
const router = Router();

const userController = require("../controllers/user.controller");

router.post("/signup", userController.signUp);
// router.post("/login", userController.login);
// router.post("/signout", userController.signOut);

module.exports = router;
