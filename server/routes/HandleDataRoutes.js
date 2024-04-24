import express from "express";
import HandleStockIncrease from "../controllers/HandleStockIncrease.js"
import HandleStockDecrease from "../controllers/HandleStockDecrease.js"
import HandleAddStock from "../controllers/HandleAddStock.js";
const router = express.Router();


router.post("/addProduct",HandleAddStock);
router.post("/:id/increase",HandleStockIncrease);
router.post("/:id/decrease",HandleStockDecrease);


export  default router;