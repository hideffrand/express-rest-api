import { Router } from "express";

const router = Router();

const renunganController = require("../controllers/renungan.controller");

router.get("/", renunganController.getAllRenungan);

router.get("/:id", renunganController.getRenunganById);
router.put("/:id", renunganController.updateRenungan);
router.delete("/:id", renunganController.deleteRenungan);

router.get("/series/:series", renunganController.getRenunganBySeries);

module.exports = router;
