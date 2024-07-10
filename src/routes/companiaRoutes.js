import express from "express";
import CompaniaController from "../controllers/companiaController.js";
import AuthMiddleware from "../config/authMiddleware.js";
import validateJSONMiddleware from "../config/validateJSONMiddleware.js";
const router = express.Router();


/**
 * @openapi
 * /rest/compania:
 *   post:
 *     summary: Crea un nuevo compania.
 *     tags: [Compania]
 *     requestBody:
 *       description: Datos del compania a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Compania/request'
 *     responses:
 *       '201':
 *         description: Compania creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Compania/response'
 *       '500':
 *         description: Error del servidor al crear compania.
 */
router.post(
    "/rest/compania",
    AuthMiddleware.requireAuth,
    
  );