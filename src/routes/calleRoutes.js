import express from "express";
import CalleController from "../controllers/calleController.js";
import AuthMiddleware from "../config/authMiddleware.js";
import validateJSONMiddleware from "../config/validateJSONMiddleware.js";
const router = express.Router();

/**
 * @openapi
 * /rest/calle:
 *   post:
 *     summary: Crea un nuevo calle.
 *     tags: [Calle]
 *     requestBody:
 *       description: Datos del calle a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Calle/request'
 *     responses:
 *       '201':
 *         description: Calle creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Calle/response'
 *       '500':
 *         description: Error del servidor al crear calle.
 */
router.post(
    "/rest/calle",
    AuthMiddleware.requireAuth,
    CalleController.createCalle
);
/**
 * @openapi
 * /rest/calles:
 *   get:
 *     summary: Obtiene un listado de calles.
 *     tags: [Calles]
 *     responses:
 *       '200':
 *         description: Listado de callas obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Calle/response'
 *       '500':
 *         description: Error del servidor al obtener el listado de calle.
 */
router.get(
    "/rest/calles",
    AuthMiddleware.requireAuth, 
    CalleController.getAllCalles
);
/**
 * @openapi
 * /rest/calle/id/{id}:
 *   get:
 *     summary: Obtiene un calle por ID.
 *     tags: [Calles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la calle a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Usuario encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Calle/response'
 *       '404':
 *         description: Calle no encontrado.
 *       '500':
 *         description: Error del servidor al obtener calle.
 */

router.get(
    "/rest/calle/id/:id",
    AuthMiddleware.requireAuth,
    CalleController.getCalle
);
/**
 * @openapi
 * /rest/calle/{id}:
 *   put:
 *     summary: Actualiza un calle por id.
 *     tags: [Calles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la calle a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Nuevos datos del calle.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Calle/request'
 *     responses:
 *       '200':
 *         description: Calle actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Calle/response'
 *       '404':
 *         description: Calle no encontrado.
 *       '500':
 *         description: Error del servidor al actualizar calle.
 */
router.put(
    "/rest/calle/:id",
    AuthMiddleware.requireAuth,
    CalleController.updateCalle
  );
  
  /**
   * @openapi
   * /rest/calle/{id}:
   *   delete:
   *     summary: Elimina un calle por ID.
   *     tags: [Calles]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID del Calle a eliminar.
   *         schema:
   *           type: integer
   *     responses:
   *       '204':
   *         description: Calle eliminado exitosamente.
   *       '404':
   *         description: Calle no encontrado.
   *       '500':
   *         description: Error del servidor al eliminar calle.
   */
  router.delete(
    "/rest/calle/:id",
    AuthMiddleware.requireAuth,
    CalleController.deleteCalle
  );
  
  export default router;
  