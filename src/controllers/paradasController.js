import Paradas from "../models/Paradas.js";
import apiResponse from "../components/apiResponse.js";
import sequelize from "../config/sequelizeConfig.js";
import { Sequelize } from "sequelize";

class paradasController {
    async createParadas(req, res) {
        try {
          const paradasData = req.body;
          const paradas = await Paradas.create(paradasData);
          const response = new apiResponse(
            true,
            paradas,
            200,
            "Parada creada correctamente "
          );
          res.status(200).json(response);
        } catch (error) {
          const response = new apiResponse(false, null, 500, error.message);
          res.status(500).json(response);
        }
      }

      async getAllParadas(req, res) {
        try {
          // Realiza una consulta para obtener todos los usuarios
          const paradas = await Paradas.findAll();
          // Devuelve la lista de usuarios como respuesta
          res.status(200).json(paradas);
            } catch (error) {
          console.error("Error al obtener las paradas:", error);
          res.status(500).json({ error: "Error al obtener las paradas" });
           }
      }
      
      async getParadas(req, res) {
        try {
          const paradasId = req.params.id;
          const paradas = await Paradas.findByPk(paradasId);
    
          if (paradas) {
            const response = new apiResponse(true, paradas, 200, "Parada encontrada");
            res.json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Parada no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al obtener una parada"
          );
          res.status(500).json(response);
        }
      }
       
      async updateParadas(req, res) {
        try {
          const paradasId = req.params.id;
          const paradaData = req.body;
          const paradas = await Paradas.findByPk(paradasId);
         
          if (paradas) {
            await user.update(paradaData);
            const response = new apiResponse(
              true,
              paradas,
              200,
              "Parada actualizada exitosamente"
            );
            res.json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Parada no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al actualizar la parada"
          );
          res.status(500).json(response);
        }
      }
     

      async deleteParadas(req, res) {
        try {
          const paradasId = req.params.id;
          const paradas = await Paradas.findByPk(paradasId);
    
          if (paradas) {
            await user.destroy();
            const response = new apiResponse(
              true,
              null,
              204,
              "Parada eliminada exitosamente"
            );
            res.status(204).json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Parada no encontrada"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al eliminar la parada"
          );
          res.status(500).json(response);
        }
      }

}