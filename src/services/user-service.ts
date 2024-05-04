import { IUser } from "../types";
const bcrypt = require("bcrypt");

const userRepository = require("../db/user.repository");

const checkUserExistence = async (username: string): Promise<boolean> => {
  const userIsExists = await userRepository.getUser(username);
  return userIsExists ? true : false;
};

const verifyUser = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    const user = await userRepository.getUser(email);
    if (!user) throw Error;

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) throw Error;

    return true;
  } catch (error) {
    return false;
  }
};

const addUser = async (data: IUser): Promise<boolean> => {
  const userIsExists = await checkUserExistence(data.username);

  if (userIsExists) return false;

  const res = await userRepository.addUser(data);

  if (res) {
    return true;
  }

  return false;
};

const updateUser = async (data: IUser): Promise<IUser | null> => {
  const userIsExists = await checkUserExistence(data.username);

  if (!userIsExists) return null;

  const result = await userRepository.updateUser(data);

  if (!result) return null;

  return result;
};

module.exports = {
  addUser,
  updateUser,
  verifyUser,
};
