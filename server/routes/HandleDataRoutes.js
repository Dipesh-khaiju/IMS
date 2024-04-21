import express from "express";
import HandleStockIncrease from "../controllers/HandleStockIncrease.js"
import HandleStockDecrease from "../controllers/HandleStockDecrease.js"
const router = express.Router();

router.post("/:id/increase",HandleStockIncrease);
router.post("/:id/decrease",HandleStockDecrease);
router.get("/dipesh",(req,res)=>{
    res.send("HEllo From Dipesh")
})

export  default router;