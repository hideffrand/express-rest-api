import { Response } from "express";

const SendResponse = (
  res: Response,
  statusCode: number,
  successStatus: boolean,
  data: any | null,
  message: string
): void => {
  res.status(statusCode).json({
    data: data,
    message: message,
    success: successStatus,
  });
};

export default SendResponse;
