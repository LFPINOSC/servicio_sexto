import Compania from "../models/Compania.js";
import apiResponse from "../components/apiResponse.js";
import sequelize from "../config/sequelizeConfig.js";
import { Sequelize } from "sequelize";
class CompaniaController {
    async createCompania(req, res) {
        try {
          const companiaData = req.body;
          const compania = await Compania.create(companiaData);
          const response = new apiResponse(
            true,
            compania,
            200,
            "Compania creado exitosamente"
          );
          res.status(200).json(response);
        } catch (error) {
          const response = new apiResponse(false, null, 500, error.message);
          res.status(500).json(response);
        }
      }

      async getAllCompanias(req, res) {
        try {
          // Realiza una consulta para obtener todos los usuarios
          const companias = await Compania.findAll();
          // Devuelve la lista de usuarios como respuesta
          res.status(200).json(companias);
        } catch (error) {
          console.error("Error al obtener companias:", error);
          res.status(500).json({ error: "Error al obtener companias" });
        }
      }
      async getCompania(req, res) {
        try {
          const companiaId = req.params.id;
          const compania = await Compania.findByPk(companiaId);
    
          if (compania) {
            const response = new apiResponse(true, compania, 200, "Compania encontrado");
            res.json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Compania no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al obtener compania"
          );
          res.status(500).json(response);
        }
      }


      async updateCompania(req, res) {
        try {
          const companiaId = req.params.id;
          const companiaData= req.body;
          const compania = await Compania.findByPk(companiaId);
          
         
          if (compania) {
            await compania.update(companiaData);
            const response = new apiResponse(
              true,
              compania,
              200,
              "Compania actualizado exitosamente"
            );
            res.json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Compania no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al actualizar compania"
          );
          res.status(500).json(response);
        }
      }
    
      async deleteCompania(req, res) {
        try {
          const companiaId= req.params.id;
          const compania = await Compania.findByPk(companiaId);
    
          if (compania) {
            await compania.destroy();
            const response = new apiResponse(
              true,
              null,
              204,
              "Compania eliminado exitosamente"
            );
            res.status(204).json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Compania no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al eliminar compania"
          );
          res.status(500).json(response);
        }
      }
}
export default new CompaniaController();