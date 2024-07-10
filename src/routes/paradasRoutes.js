import express from "express";
import ParadasController from "../controllers/paradasController.js";
import AuthMiddleware from "../config/authMiddleware.js";
import validateJSONMiddleware from "../config/validateJSONMiddleware.js";
import paradasController from "../controllers/paradasController.js";
const router = express.Router();

/**
 * @openapi
 * /rest/paradas:
 *   post:
 *     summary: Crea una nueva parada.
 *     tags: [Paradas]
 *     requestBody:
 *       description: Datos de la parada a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paradas/request'
 *     responses:
 *       '201':
 *         description: Parada creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Parada/response'
 *       '500':
 *         description: Error del servidor al crear paradas.
 */
router.post(
    "/rest/paradas",
    AuthMiddleware.requireAuth,
    ParadasController.createParadas
  );

  /**
 * @openapi
 * /rest/paradas:
 *   get:
 *     summary: Obtiene un listado de paradas.
 *     tags: [Paradas]
 *     responses:
 *       '200':
 *         description: Listado de paradas obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paradas/response'
 *       '500':
 *         description: Error del servidor al obtener el listado de paradas.
 */
router.get("/rest/paradas",
    AuthMiddleware.requireAuth, 
    paradasController.getAllParadas
);

/**
 * @openapi
 * /rest/paradas/id/{id}:
 *   get:
 *     summary: Obtiene una parada por un id.
 *     tags: [Paradas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de las paradas a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Paradas encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paradas/response'
 *       '404':
 *         description: Paradas no encontradas.
 *       '500':
 *         description: Error del servidor al obtener la parada.
 */

router.get(
    "/rest/paradas/id/:id",
    //AuthMiddleware.requireAuth,
    paradasController.getParadas
  );

  /**
 * @openapi
 * /rest/paradas/{id}:
 *   put:
 *     summary: Actualiza una parada por id.
 *     tags: [Paradas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de paradas a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Nuevos datos de paradas.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paradas/request'
 *     responses:
 *       '200':
 *         description: Paradas actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paradas/response'
 *       '404':
 *         description: Parada no encontrada.
 *       '500':
 *         description: Error del servidor al actualizar la parada.
 */
router.put(
    "/rest/paradas/:id",
    AuthMiddleware.requireAuth,
    paradasController.updateParadas
  );
  
  /**
   * @openapi
   * /rest/paradas/{id}:
   *   delete:
   *     summary: Elimina una calle por ID.
   *     tags: [Paradas]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID de la parada a eliminar.
   *         schema:
   *           type: integer
   *     responses:
   *       '204':
   *         description: Parada eliminada exitosamente.
   *       '404':
   *         description: Parada no encontrada.
   *       '500':
   *         description: Error del servidor al eliminar paradas.
   */
  router.delete(
    "/rest/paradas/:id",
    AuthMiddleware.requireAuth,
    paradasController.deleteParadas
  );
  
  export default router;