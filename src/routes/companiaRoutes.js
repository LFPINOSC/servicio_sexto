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
    CompaniaController.createCompania
  );

  /**
 * @openapi
 * /rest/companias:
 *   get:
 *     summary: Obtiene un listado de companias.
 *     tags: [Companias]
 *     responses:
 *       '200':
 *         description: Listado de companias obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Compania/response'
 *       '500':
 *         description: Error del servidor al obtener el listado de companias.
 */
router.get(
  "/rest/companias",
  AuthMiddleware.requireAuth, 
  CompaniaController.getAllCompanias
);
/**
 * @openapi
 * /rest/compania/id/{id}:
 *   get:
 *     summary: Obtiene un compania por secuencial.
 *     tags: [Companias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del compania a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Compania encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Compania/response'
 *       '404':
 *         description: Compania no encontrado.
 *       '500':
 *         description: Error del servidor al obtener compania.
 */

router.get(
  "/rest/compania/id/:id",
  //AuthMiddleware.requireAuth,
  CompaniaController.getCompania
);
/**
 * @openapi
 * /rest/compania/{id}:
 *   put:
 *     summary: Actualiza un compania por secuencial.
 *     tags: [Compania]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del compania a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Nuevos datos del compania.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Compania/request'
 *     responses:
 *       '200':
 *         description: Compania actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Compania/response'
 *       '404':
 *         description: Compania no encontrado.
 *       '500':
 *         description: Error del servidor al actualizar compania.
 */
router.put(
  "/rest/compania/:id",
  AuthMiddleware.requireAuth,
  CompaniaController.updateCompania
);
/**
 * @openapi
 * /rest/companias/{id}:
 *   put:
 *     summary: Actualiza un compania por id.
 *     tags: [Companias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del compania a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Nuevos datos del compania.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Compania/request'
 *     responses:
 *       '200':
 *         description: Compania actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Compania/response'
 *       '404':
 *         description: Compania no encontrado.
 *       '500':
 *         description: Error del servidor al actualizar compania.
 */
router.put(
  "/rest/compania/:id",
  AuthMiddleware.requireAuth,
  CompaniaController.updateCompania
);

/**
 * @openapi
 * /rest/compania/{id}:
 *   delete:
 *     summary: Elimina un compania por id.
 *     tags: [Compania]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del compania a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Compania eliminado exitosamente.
 *       '404':
 *         description: Compania no encontrado.
 *       '500':
 *         description: Error del servidor al eliminar compania.
 */
router.delete(
  "/rest/companias/:id",
  AuthMiddleware.requireAuth,
  CompaniaController.deleteCompania
);

export default router;
