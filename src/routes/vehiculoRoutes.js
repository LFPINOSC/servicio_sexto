import express from "express";
import VehiculoController from "../controllers/vehiculoController.js";
import AuthMiddleware from "../config/authMiddleware.js";
import validateJSONMiddleware from "../config/validateJSONMiddleware.js";
const router = express.Router();


/**
 * @openapi
 * /rest/vehiculo:
 *   post:
 *     summary: Crea un nuevo vehiculo.
 *     tags: [Vehiculo]
 *     requestBody:
 *       description: Datos del vehiculo a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehiculo/request'
 *     responses:
 *       '201':
 *         description: Vehiculo creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehiculo/response'
 *       '500':
 *         description: Error del servidor al crear vehiculo.
 */
router.post(
    "/rest/vehiculo",
    AuthMiddleware.requireAuth,
    VehiculoController.createVehiculo
  );
  /**
 * @openapi
 * /rest/:vehiculos
 *   get:
 *     summary: Obtiene un listado de vehiculo.
 *     tags: [Vehiculos]
 *     responses:
 *       '200':
 *         description: Listado de vehiculos obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehiculo/response'
 *       '500':
 *         description: Error del servidor al obtener el listado de vehiculos.
 */
router.get("/rest/vehiculos",
    AuthMiddleware.requireAuth, 
    VehiculoController.getAllVehiculos
);
/**
 * @openapi
 * /rest/vehiculo/id/{id}:
 *   get:
 *     summary: Obtiene un vehiculo por ID.
 *     tags: [Vehiculos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del vehiculo a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Vehiculo encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehiculo/response'
 *       '404':
 *         description: Vehiculo no encontrado.
 *       '500':
 *         description: Error del servidor al obtener vehiculo.
 */

router.get(
    "/rest/vehiculo/id/:id",
    AuthMiddleware.requireAuth,
    VehiculoController.getVehiculo
  );
  /**
 * @openapi
 * /rest/vehiculo/{id}:
 *   put:
 *     summary: Actualiza un vehiculo por id.
 *     tags: [ Vehiculos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: secuencial del vehiculo a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Nuevos datos del vehiculo.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehiculo/request'
 *     responses:
 *       '200':
 *         description: Vehiculo actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehiculo/response'
 *       '404':
 *         description: Vehiculo no encontrado.
 *       '500':
 *         description: Error del servidor al actualizar vehiculo.
 */
router.put(
    "/rest/vehiculo/:id",
    AuthMiddleware.requireAuth,
    VehiculoController.updateVehiculo
  );
  
  /**
   * @openapi
   * /rest/vehiculo/{id}:
   *   delete:
   *     summary: Elimina un vehiculo por ID.
   *     tags: [Vehiculos]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID del vehiculo a eliminar.
   *         schema:
   *           type: integer
   *     responses:
   *       '204':
   *         description: Vehiculo eliminado exitosamente.
   *       '404':
   *         description:  Vehiculo no encontrado.
   *       '500':
   *         description: Error del servidor al eliminar vehiculos.
   */
  router.delete(
    "/rest/vehiculo/:id",
    AuthMiddleware.requireAuth,
    VehiculoController.deleteVehiculo
  );
  
  export default router;
  