import express from "express";
import { create, deleteData, get, update } from "../service/service.js";
import { validate } from "../validation/validate.js";
var router = express.Router();

router.get("/get", get);
router.post("/create", validate, create);
router.put("/update/:id", validate, update);
router.delete("/delete/:id", deleteData);

export default router;
