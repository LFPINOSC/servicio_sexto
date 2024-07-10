import express from "express";
import semaforoController from "../controllers/semaforoController.js";
import AuthMiddleware from "../config/authMiddleware.js";
import validateJSONMiddleware from "../config/validateJSONMiddleware.js";
const router = express.Router();

/**
 * @openapi
 * /rest/semaforo:
 *   post:
 *     summary: Crea un nuevo semaforo.
 *     tags: [semaforo]
 *     requestBody:
 *       description: Datos del semaforo a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/semaforos/request'
 *     responses:
 *       '201':
 *         description: semaforo creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/semaforos/response'
 *       '500':
 *         description: Error del servidor al crear semaforo.
 */
router.post(
    "/rest/semaforos",
    AuthMiddleware.requireAuth,
    semaforoController.createsemaforo
  );
  /**
 * @openapi
 * /rest/semaforo:
 *   get:
 *     summary: Obtiene un listado de semaforo.
 *     tags: [semaforo]
 *     responses:
 *       '200':
 *         description: Listado de semaforo obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/semaforos/response'
 *       '500':
 *         description: Error del servidor al obtener el listado de usuarios.
 */
router.get("/rest/semaforos",AuthMiddleware.requireAuth, semaforoController.getAllsemaforo);
/**
 * @openapi
 * /rest/semafpros/id/{id}:
 *   get:
 *     summary: Obtiene un semaforo por id.
 *     tags: [semaforo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del semaforo a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: semaforo encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/semaforos/response'
 *       '404':
 *         description: semaforos no encontrado.
 *       '500':
 *         description: Error del servidor al obtener semaforos.
 */

router.get(
    "/rest/semaforos/id/:id",
    //AuthMiddleware.requireAuth,
    semaforoController.getsemaforo
  );
  /**
 * @openapi
 * /rest/semaforos/{id}:
 *   put:
 *     summary: Actualiza un semaforo por id.
 *     tags: [semaforo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del semaforo a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Nuevos datos del semaforo.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/semaforos/request'
 *     responses:
 *       '200':
 *         description: semaforo actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/semaforo/response'
 *       '404':
 *         description: semaforo no encontrado.
 *       '500':
 *         description: Error del servidor al actualizar semaforo.
 */
router.put(
    "/rest/semaforo/:id",
    AuthMiddleware.requireAuth,
    semaforoController.updatesemaforo
  );
  
  /**
   * @openapi
   * /rest/semaforos/{id}:
   *   delete:
   *     summary: Elimina un semaforo por ID.
   *     tags: [semaforo]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID del semaforo a eliminar.
   *         schema:
   *           type: integer
   *     responses:
   *       '204':
   *         description: semaforo eliminado exitosamente.
   *       '404':
   *         description: semaforo no encontrado.
   *       '500':
   *         description: Error del servidor al eliminar semaforo.
   */
  router.delete(
    "/rest/semaforos/:id",
    AuthMiddleware.requireAuth,
    semaforoController.deletesemaforo
  );
  
  export default router;