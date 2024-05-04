import { Response, Request } from "express";
import SendResponse from "../../response";

const logger = require("../libs/logger");
const userService = require("../services/user-service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const signUp = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.headers;
    if (!email || !username || !password) {
      throw new Error("Email, username, or password is missing!");
    }

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await userService.addUser({
      username: username,
      email: email,
      password: hashedPassword,
    });

    if (!result) throw new Error("Username already exist");

    SendResponse(
      res,
      200,
      true,
      {
        username: username,
        email: email,
      },
      "Successfully created new user!"
    );
  } catch (error) {
    SendResponse(res, 400, false, null, (error as Error).message);
  }
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.headers;

  const isMatched = await userService.verifyUser(username, password);

  if (isMatched) {
    res.cookie("userId", username, { maxAge: 3600000, httpOnly: true }); // Cookie expires in 1 hour
    SendResponse(res, 200, true, null, "login success");
  }

  SendResponse(res, 401, false, null, "failed to login");
};

const signOut = (req: Request, res: Response) => {
  const userId = req.cookies.userId;

  if (userId) {
    res.clearCookie("userId");
    SendResponse(res, 200, true, null, "signed out successfully");
  }

  SendResponse(res, 401, false, null, "no user logged in");
};

module.exports = {
  login,
  signOut,
  signUp,
};
