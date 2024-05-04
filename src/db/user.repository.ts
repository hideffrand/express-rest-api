import { IUser } from "../types";
const supabase = require("../libs/supabase/init");
const logger = require("../libs/logger");

const USER_TABLE_NAME = process.env.USER_TABLE_NAME as string;

const getUser = async (username: string): Promise<IUser | null> => {
  const { data, error } = await supabase
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
};

const addUser = async (data: IUser): Promise<boolean> => {
  try {
    await supabase.from(USER_TABLE_NAME).insert(data);

    return true;
  } catch (error) {
    logger.error((error as Error).message);
    return false;
  }
};

const updateUser = async (data: IUser): Promise<IUser | null> => {
  const { error } = await supabase
    .from(USER_TABLE_NAME)
    .update(data)
    .eq("email", data.email);

  if (error) return null;

  const updatedUser = await getUser(data.email);

  return updatedUser;
};

module.exports = {
  getUser,
  addUser,
  updateUser,
};
