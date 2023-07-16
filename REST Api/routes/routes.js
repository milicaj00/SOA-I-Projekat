import express from "express";
import { create, deleteData, get, update } from "../service/service.js";
import { validate } from "../validation/validate.js";
var router = express.Router();

/**
 * @openapi
 * /get:
 *   get:
 *     tags:
 *       - Metrnal Health Risks
 *     summary: get
 *     parameters:
 *       - name: perPage
 *         in: query
 *         schema:
 *           type: string
 *       - name: page
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
 */
router.get("/get", get);

/**
 * @openapi
 * /create:
 *   post:
 *     tags:
 *       - Metrnal Health Risks
 *     summary: create
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               Age: 9
 *               SystolicBP: 9
 *               DiastolicBP: 9
 *               BS: 9
 *               BodyTemp: 9
 *               HeartRate: 9
 *               RiskLevel: high risk
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
 */

router.post("/create", validate, create);
/**
 * @openapi
 * /update/{id}:
 *   put:
 *     tags:
 *       - Metrnal Health Risks
 *     summary: update
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               Age: 9
 *               SystolicBP: 6
 *               DiastolicBP: 9
 *               BS: 9
 *               BodyTemp: 9
 *               HeartRate: 9
 *               RiskLevel: high risk
 *     parameters:
 *       - name: id
 *         in: path
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
 */
router.put("/update/:id", validate, update);
/**
 * @openapi 
 * /delete/{id}:
 *   delete:
 *     tags:
 *       - Metrnal Health Risks
 *     summary: delete
 *     parameters:
 *       - name: id
 *         in: path
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json: {}
 */
router.delete("/delete/:id", deleteData);

export default router;
