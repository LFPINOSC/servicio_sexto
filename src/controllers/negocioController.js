import Negocio from "../models/Negocio.js";
import apiResponse from "../components/apiResponse.js";
import sequelize from "../config/sequelizeConfig.js";
import { Sequelize } from "sequelize";
class NegocioController {
    async createNegocio(req, res) {
    try {
      const negocioData = req.body;
      const negocio = await Negocio.create(negocioData);
      const response = new apiResponse(
        true,
        negocio,
        200,
        "Negocio creado exitosamente"
      );
      res.status(200).json(response);
    } catch (error) {
      const response = new apiResponse(false, null, 500, error.message);
      res.status(500).json(response);
    }
  }
  async getAllNegocio(req, res) {
    try {
      // Realiza una consulta para obtener todos los usuarios
      const negocios = await Negocio.findAll();
      // Devuelve la lista de usuarios como respuesta
      res.status(200).json(negocios);
    } catch (error) {
      console.error("Error al obtener negocios:", error);
      res.status(500).json({ error: "Error al obtener negocios" });
    }
  }
  async getNegocios(req, res) {
    try {
      const negocioId = req.params.id;
      const negocio = await Negocio.findByPk(negocioId);

      if (negocio) {
        const response = new apiResponse(true, negocio, 200, "Negocio encontrado");
        res.json(response);
      } else {
        const response = new apiResponse(
          false,
          null,
          404,
          "Negocio no encontrado"
        );
        res.status(404).json(response);
      }
    } catch (error) {
      const response = new apiResponse(
        false,
        null,
        500,
        "Error del servidor al obtener negocio"
      );
      res.status(500).json(response);
    }
  }
  async updateNegocio(req, res) {
    try {
      const negocioId = req.params.id;
      const negocioData = req.body;
      const negocio = await Negocio.findByPk(negocioId);
        if (negocio) {
        await negocio.update(negocioData);
        const response = new apiResponse(
          true,
          negocio,
          200,
          "Negocio actualizado exitosamente"
        );
        res.json(response);
      } else {
        const response = new apiResponse(
          false,
          null,
          404,
          "Negocio no encontrado"
        );
        res.status(404).json(response);
      }
    } catch (error) {
      const response = new apiResponse(
        false,
        null,
        500,
        "Error del servidor al actualizar negocio"
      );
      res.status(500).json(response);
    }
  }

  async deleteNegocio(req, res) {
    try {
      const negocioId = req.params.id;
      const negocio = await Negocio.findByPk(negocioId);

      if (negocio) {
        await negocio.destroy();
        const response = new apiResponse(
          true,
          null,
          204,
          "Negocio eliminado exitosamente"
        );
        res.status(204).json(response);
      } else {
        const response = new apiResponse(
          false,
          null,
          404,
          "Negocio no encontrado"
        );
        res.status(404).json(response);
      }
    } catch (error) {
      const response = new apiResponse(
        false,
        null,
        500,
        "Error del servidor al eliminar negocio"
      );
      res.status(500).json(response);
    }
  }
}