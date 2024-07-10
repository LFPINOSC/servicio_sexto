import semaforo from "../models/semaforos.js";
import apiResponse from "../components/apiResponse.js";
import sequelize from "../config/sequelizeConfig.js";
import { Sequelize } from "sequelize";
class semaforoController {
    async createsemaforo(req, res) {
        try {
          const semaforoData = req.body;
          const semaforo = await semaforo.create(semaforoData);
          const response = new apiResponse(
            true,
            semaforo,
            200,
            "semaforo creado exitosamente"
          );
          res.status(200).json(response);
        } catch (error) {
          const response = new apiResponse(false, null, 500, error.message);
          res.status(500).json(response);
        }
    }
    async getAllsemaforo(req, res) {
        try {
          // Realiza una consulta para obtener todos los semaforos
          const semaforos = await semaforos.findAll();
          // Devuelve la lista de semaforo como respuesta
          res.status(200).json(semaforo);
        } catch (error) {
          console.error("Error al obtener semaforos:", error);
          res.status(500).json({ error: "Error al obtener semaforos" });
        }
    }
    async getsemaforo(req, res) {
        try {
          const semaforoId = req.params.id;
          const semaforo = await semaforo.findByPk(semaforoId);
    
          if (semaforo) {
            const response = new apiResponse(true, semaforo, 200, "Semaforo encontrado");
            res.json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Semaforo no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al obtener semaforo"
          );
          res.status(500).json(response);
        }
      }
      async updatesemaforo(req, res) {
        try {
          const semaforoId = req.params.id;
          const semaforoData = req.body;
          const semaforo = await semaforo.findByPk(semaforoId);
          if (semaforo) {
            await semaforo.update(semaforoData);
            const response = new apiResponse(
              true,
              semaforo,
              200,
              "Semaforo actualizado exitosamente"
            );
            res.json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Semaforo no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al actualizar semaforo"
          );
          res.status(500).json(response);
        }
      }
    
      async deletesemaforo(req, res) {
        try {
          const semaforoId = req.params.id;
          const semaforo = await semaforo.findByPk(semaforoId);
    
          if (semaforo) {
            await semaforo.destroy();
            const response = new apiResponse(
              true,
              null,
              204,
              "Semaforo eliminado exitosamente"
            );
            res.status(204).json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Semaforo no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al eliminar semaforo"
          );
          res.status(500).json(response);
        }
      }
}
