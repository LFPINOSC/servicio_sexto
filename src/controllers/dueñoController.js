import Dueño from "../models/Dueño.js";
import apiResponse from "../components/apiResponse.js";
import sequelize from "../config/sequelizeConfig.js";
import { Sequelize } from "sequelize";
class DueñoController {
    async createDueño(req, res) {
        try {
          const dueñoData = req.body;
          const dueño = await Dueño.create(dueñoData);
          const response = new apiResponse(
            true,
            dueño,
            200,
            "Dueño creado exitosamente"
          );
          res.status(200).json(response);
        } catch (error) {
          const response = new apiResponse(false, null, 500, error.message);
          res.status(500).json(response);
        }
      }

async getAllDueños(req, res) {
    try {
      // Realiza una consulta para obtener todos los usuarios
      const dueños = await Dueño.findAll();
      // Devuelve la lista de usuarios como respuesta
      res.status(200).json(dueños);
    } catch (error) {
      console.error("Error al obtener dueños:", error);
      res.status(500).json({ error: "Error al obtener dueños" });
    }
  }
  async getDueño(req, res) {
    try {
      const dueñoId = req.params.id;
      const dueño = await Dueño.findByPk(dueñoId);

      if (dueño) {
        const response = new apiResponse(true, dueño, 200, "Dueño encontrado");
        res.json(response);
      } else {
        const response = new apiResponse(
          false,
          null,
          404,
          "Dueño no encontrado"
        );
        res.status(404).json(response);
      }
    } catch (error) {
      const response = new apiResponse(
        false,
        null,
        500,
        "Error del servidor al obtener dueño"
      );
      res.status(500).json(response);
    }
  }
  async updateDueño(req, res) {
    try {
      const dueñoId = req.params.id;
      const dueñoData = req.body;
      const dueño = await Dueño.findByPk(dueñoId);
      
      if (dueño) {
        await dueño.update(dueñoData);
        const response = new apiResponse(
          true,
          dueño,
          200,
          "Dueño actualizado exitosamente"
        );
        res.json(response);
      } else {
        const response = new apiResponse(
          false,
          null,
          404,
          "Dueño no encontrado"
        );
        res.status(404).json(response);
      }
    } catch (error) {
      const response = new apiResponse(
        false,
        null,
        500,
        "Error del servidor al actualizar dueño"
      );
      res.status(500).json(response);
    }
  }

  async deleteDueño(req, res) {
    try {
      const dueñoId = req.params.id;
      const dueño = await Dueño.findByPk(dueñoId);

      if (dueño) {
        await dueño.destroy();
        const response = new apiResponse(
          true,
          null,
          204,
          "Dueño eliminado exitosamente"
        );
        res.status(204).json(response);
      } else {
        const response = new apiResponse(
          false,
          null,
          404,
          "Dueño no encontrado"
        );
        res.status(404).json(response);
      }
    } catch (error) {
      const response = new apiResponse(
        false,
        null,
        500,
        "Error del servidor al eliminar dueño"
      );
      res.status(500).json(response);
    }
  }
}
export default new DueñoController();


