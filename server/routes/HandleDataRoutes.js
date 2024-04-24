import express from "express";
import HandleUpdate from "../controllers/updateStock/HandleUpdate.js";
import HandleStockIncrease from "../controllers/updateStock/HandleIncreaseStock.js"
import HandleStockDecrease from "../controllers/updateStock/HandleDecreaseStock.js"
import HandleAddStock from "../controllers/HandleAddStock.js";
import HandleStockDelete from "../controllers/HandleStockDelete.js"

const router = express.Router();


router.post("/addProduct",HandleAddStock);
router.post("/deleteProduct/:id",HandleStockDelete);

router.put("/update/:id",HandleUpdate)
router.put("/increase/:id",HandleStockIncrease);
router.put("/decrease/:id",HandleStockDecrease);


export  default router;