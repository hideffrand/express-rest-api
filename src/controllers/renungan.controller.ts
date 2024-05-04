import SendResponse from "../../response";
import { Request, Response } from "express";
const renunganService = require("../services/renungan-service");

const getRenunganById = async (req: Request, res: Response) => {
  try {
    const data = await renunganService.getRenunganById(req.params.id);
    SendResponse(res, 200, true, data, "OK");
  } catch (error) {
    SendResponse(res, 404, false, null, "Not found");
  }
};

const getRenunganBySeries = async (req: Request, res: Response) => {
  try {
    const series = req.params.series;
    if (!series) throw Error;

    const data = await renunganService.getRenunganBySeries(series);
    SendResponse(res, 200, true, data, "OK");
  } catch (error) {
    SendResponse(res, 404, false, null, "Bad request");
  }
};

const getAllRenungan = async (req: Request, res: Response) => {
  try {
    const data = await renunganService.getAllRenungan();
    SendResponse(res, 200, true, data, "halo");
  } catch (error) {
    SendResponse(res, 404, false, null, "Bad Request");
  }
};

const addRenungan = async (req: Request, res: Response) => {
  try {
    const { data } = req.body;
    if (!data) throw Error;

    const result = await renunganService.addRenungan(data);
    if (!result) throw Error;

    SendResponse(res, 200, true, null, "Inserted ");
  } catch (error) {
    SendResponse(res, 500, false, null, "Interval server error!");
  }
};

const updateRenungan = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;

    if (!id || !data) throw Error;

    const result = await renunganService.updateRenungan(id, data);
    if (!result) throw Error;

    SendResponse(res, 200, true, null, "Success");
  } catch (error) {
    SendResponse(res, 500, false, null, "Internal server error");
  }
};

const deleteRenungan = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) throw Error;

    const result = await renunganService.deleteRenungan(id);
    if (!result) throw Error;

    SendResponse(res, 200, true, null, "Success");
  } catch (error) {
    SendResponse(res, 500, false, null, "Internal server error");
  }
};

module.exports = {
  getRenunganById,
  getRenunganBySeries,
  getAllRenungan,
  addRenungan,
  updateRenungan,
  deleteRenungan,
};
