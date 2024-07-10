import express from "express";
import NegocioController from "../controllers/negocioController.js";
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
    "/rest/negocios",
    AuthMiddleware.requireAuth,
    NegocioController.createNegocio
  );
  /**
 * @openapi
 * /rest/negocios:
 *   get:
 *     summary: Obtiene un listado de negocios.
 *     tags: [Negocios]
 *     responses:
 *       '200':
 *         description: Listado de negocios obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Negocios/response'
 *       '500':
 *         description: Error del servidor al obtener el listado de negocios.
 */
router.get(
    "/rest/negocios",
    AuthMiddleware.requireAuth, 
    NegocioController.getAllNegocio
);

/**
 * @openapi
 * /rest/negocio/id/{id}:
 *   get:
 *     summary: Obtiene un negocio por id.
 *     tags: [Negocios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del negocio a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Negocio encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Negocios/response'
 *       '404':
 *         description: Negocio no encontrado.
 *       '500':
 *         description: Error del servidor al obtener negocio.
 */

router.get(
    "/rest/negocio/id/:id",
    //AuthMiddleware.requireAuth,
    NegocioController.getNegocios
  );

  /**
 * @openapi
 * /rest/negocios/{id}:
 *   put:
 *     summary: Actualiza un negocio por id.
 *     tags: [Negocios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del negocio a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Nuevos datos del negocio.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Negocios/request'
 *     responses:
 *       '200':
 *         description: Negocio actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Negocios/response'
 *       '404':
 *         description: Negocio no encontrado.
 *       '500':
 *         description: Error del servidor al actualizar negocio.
 */
router.put(
    "/rest/negocio/:id",
    AuthMiddleware.requireAuth,
    NegocioController.updateNegocio
  );
  
  /**
   * @openapi
   * /rest/negocios/{id}:
   *   delete:
   *     summary: Elimina un negocio por ID.
   *     tags: [Negocios]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID del negocio a eliminar.
   *         schema:
   *           type: integer
   *     responses:
   *       '204':
   *         description: Negocio eliminado exitosamente.
   *       '404':
   *         description: Negocio no encontrado.
   *       '500':
   *         description: Error del servidor al eliminar negocio.
   */
  router.delete(
    "/rest/negocio/:id",
    AuthMiddleware.requireAuth,
    NegocioController.deleteNegocio
  );
  
  export default router;
  