"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const renunganController = require("../controllers/renungan.controller");
router.get("/", renunganController.getAllRenungan);
router.get("/:id", renunganController.getRenunganById);
router.put("/:id", renunganController.updateRenungan);
router.delete("/:id", renunganController.deleteRenungan);
router.get("/series/:series", renunganController.getRenunganBySeries);
module.exports = router;
//# sourceMappingURL=renungan.route.js.map