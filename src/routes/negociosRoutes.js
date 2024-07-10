import express from "express";
import NegocioController from "../controllers/negociosController.js";
import AuthMiddleware from "../config/authMiddleware.js";
import validateJSONMiddleware from "../config/validateJSONMiddleware.js";
const router = express.Router();

/**
 * @openapi
 * /rest/negocio:
 *   post:
 *     summary: Crea un nuevo negocio.
 *     tags: [Negocio]
 *     requestBody:
 *       description: Datos del negocio a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Negocios/request'
 *     responses:
 *       '201':
 *         description: Negocio creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Negocios/response'
 *       '500':
 *         description: Error del servidor al crear negocio.
 */
router.post(
    "/rest/negocio",
    AuthMiddleware.requireAuth,
    NegocioController.createUser
  );