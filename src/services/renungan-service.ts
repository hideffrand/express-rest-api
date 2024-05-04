import { IRenungan } from "../types";

const renunganRespository = require("../db/renungan.repository");

const getRenunganById = async (id: string) => {
  return await renunganRespository.getRenunganById(id);
};

const getRenunganBySeries = async (series: string) => {
  return await renunganRespository.getRenunganBySeries(series);
};

const getAllRenungan = async () => {
  return await renunganRespository.getAllRenungan();
};

const addRenungan = async (data: IRenungan) => {
  return await renunganRespository.addRenungan(data);
};

const deleteRenungan = async (id: string) => {
  return await renunganRespository.deleteRenungan(id);
};

module.exports = {
  getRenunganById,
  getRenunganBySeries,
  getAllRenungan,
  addRenungan,
  deleteRenungan,
};
