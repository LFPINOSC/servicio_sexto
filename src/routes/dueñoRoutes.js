import express from "express";
import DueñoController from "../controllers/dueñoController.js";
import AuthMiddleware from "../config/authMiddleware.js";
import validateJSONMiddleware from "../config/validateJSONMiddleware.js";
import dueñoController from "../controllers/dueñoController.js";
const router = express.Router();

/**
 * @openapi
 * /rest/dueño:
 *   post:
 *     summary: Crea un nuevo dueño.
 *     tags: [Dueños]
 *     requestBody:
 *       description: Datos del dueño a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dueño/request'
 *     responses:
 *       '201':
 *         description: Dueño creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dueño/response'
 *       '500':
 *         description: Error del servidor al crear un dueño.
 */

router.post(
    "/rest/dueño",
    AuthMiddleware.requireAuth,
    DueñoController.createDueño
  );
  /**
 * @openapi
 * /rest/dueño:
 *   get:
 *     summary: Obtiene un listado de dueños.
 *     tags: [Dueños]
 *     responses:
 *       '200':
 *         description: Listado de dueños obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dueño/response'
 *       '500':
 *         description: Error del servidor al obtener el listado de dueños.
 */
router.get("/rest/dueños",
    AuthMiddleware.requireAuth,
     DueñoController.getAllDueños
    );
    /**
 * @openapi
 * /rest/dueño/Cedula/{Cedula}:
 *   get:
 *     summary: Obtiene un dueño por cedula.
 *     tags: [Dueños]
 *     parameters:
 *       - in: path
 *         name: cedula
 *         required: true
 *         description: cedula del dueño a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Dueño encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dueño/response'
 *       '404':
 *         description: Dueño no encontrado.
 *       '500':
 *         description: Error del servidor al obtener dueño.
 */

router.get(
    "/rest/dueños/cedula/:cedula",
    AuthMiddleware.requireAuth,
    DueñoController.getDueño
  );
  /**
 * @openapi
 * /rest/dueño/{cedula}:
 *   put:
 *     summary: Actualiza un dueño por secuencial.
 *     tags: [Dueños]
 *     parameters:
 *       - in: path
 *         name: cedula
 *         required: true
 *         description: cedula del usuario a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Nuevos datos del dueño.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dueño/request'
 *     responses:
 *       '200':
 *         description: Dueño actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dueño/response'
 *       '404':
 *         description: Dueño no encontrado.
 *       '500':
 *         description: Error del servidor al actualizar dueño.
 */
router.put(
    "/rest/dueño/:cedula",
    AuthMiddleware.requireAuth,
    DueñoController.updateDueño
  );
  
  /**
   * @openapi
   * /rest/dueño/{cedula}:
   *   delete:
   *     summary: Elimina un dueño por ID.
   *     tags: [Dueños]
   *     parameters:
   *       - in: path
   *         name: cedula
   *         required: true
   *         description: ID del dueño a eliminar.
   *         schema:
   *           type: integer
   *     responses:
   *       '204':
   *         description: Dueño eliminado exitosamente.
   *       '404':
   *         description: Dueño no encontrado.
   *       '500':
   *         description: Error del servidor al eliminar dueño.
   */
  router.delete(
    "/rest/dueño/:id",
    AuthMiddleware.requireAuth,
    DueñoController.deleteDueño
  );
  
  export default router;
  

