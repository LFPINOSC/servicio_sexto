import Calle from "../models/Calle.js";
import apiResponse from "../components/apiResponse.js";
import sequelize from "../config/sequelizeConfig.js";
import { Sequelize } from "sequelize";
class CalleController {
    async createCalle(req, res) {
        try {
          const calleData = req.body;
          const calle = await Calle.create(calleData);
          const response = new apiResponse(
            true,
            calle,
          200,
            "Calle creado exitosamente"
          );
          res.status(200).json(response);
        } catch (error) {
          const response = new apiResponse(false, null, 500, error.message);
          res.status(500).json(response);
        }
      }
      async getAllCalles(req, res) {
        try {
          // Realiza una consulta para obtener todos los usuarios
          const calles = await Calle.findAll();
          // Devuelve la lista de usuarios como respuesta
          res.status(200).json(calles);
        } catch (error) {
          console.error("Error al obtener calles:", error);
          res.status(500).json({ error: "Error al obtener calles" });
        }
      }
      async getCalle(req, res) {
        try {
          const calleId = req.params.id;
          const calle = await Calle.findByPk(calleId);
    
          if (calle) {
            const response = new apiResponse(true, calle, 200, "Calle encontrado");
            res.json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Calle no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al obtener calle"
          );
          res.status(500).json(response);
        }
      }
      async updateCalle(req, res) {
        try {
          const calleId = req.params.id;
          const calleData = req.body;
          const calle = await Calle.findByPk(calleId);
          if (calle) {
            await calle.update(calleData);
            const response = new apiResponse(
              true,
              calle,
              200,
              "Calle actualizado exitosamente"
            );
            res.json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Calle no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al actualizar calle"
          );
          res.status(500).json(response);
        }
      }
      async deleteCalle(req, res) {
        try {
          const calleId = req.params.id;
          const calle = await Calle.findByPk(calleId);
    
          if (calle) {
            await calle.destroy();
            const response = new apiResponse(
              true,
              null,
              204,
              "calle eliminado exitosamente"
            );
            res.status(204).json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "calle no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al eliminar calle"
          );
          res.status(500).json(response);
        }
      }
}
export default new CalleController();