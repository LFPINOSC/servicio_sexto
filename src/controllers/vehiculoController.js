import User from "../models/Vehiculo.js";
import apiResponse from "../components/apiResponse.js";
import sequelize from "../config/sequelizeConfig.js";
import { Sequelize } from "sequelize";
import Vehiculo from "../models/Vehiculo.js";
class VehiculoController {
    async createVehiculo(req, res) {
        try {
          const vehiculoData = req.body;
          const vehiculo = await Vehiculo.create(vehiculoData);
          const response = new apiResponse(
            true,
            vehiculo,
            200,
            "Usuario creado exitosamente"
          );
          res.status(200).json(response);
        } catch (error) {
          const response = new apiResponse(false, null, 500, error.message);
          res.status(500).json(response);
         }
    }
    async getAllVehiculos(req, res) {
        try {
          // Realiza una consulta para obtener todos los usuarios
          const vehiculos = await Vehiculo.findAll();
          // Devuelve la lista de usuarios como respuesta
          res.status(200).json(vehiculos);
        } catch (error) {
          console.error("Error al obtener vehiculos:", error);
          res.status(500).json({ error: "Error al obtener vehiculos" });
        }
    }
    async getVehiculo(req, res) {
        try {
          const vehiculoId = req.params.id;
          const vehiculo = await Vehiculo.findByPk(vehiculoId);
    
          if (vehiculo) {
            const response = new apiResponse(true, vehiculo, 200, "Vehiculo encontrado");
            res.json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Vehiculo no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al obtener vehiculo"
          );
          res.status(500).json(response);
        }
      }
      async updateVehiculo(req, res) {
        try {
          const vehiculoId = req.params.id;
          const vehiculoData = req.body;
          const vehiculo = await Vehiculo.findByPk(vehiculoData);
         
          if (vehiculo) {
            await vehiculo.update(vehiculoData);
            const response = new apiResponse(
              true,
              vehiculo,
              200,
              "Vehiculo actualizado exitosamente"
            );
            res.json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Vehiculo no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al actualizar vehiculo"
          );
          res.status(500).json(response);
        }
      }
      async deleteVehiculo(req, res) {
        try {
          const vehiculoId = req.params.id;
          const vehiculo = await Vehiculo.findByPk(vehiculoId);
    
          if (vehiculo) {
            await vehiculo.destroy();
            const response = new apiResponse(
              true,
              null,
              204,
              "Vehiculo eliminado exitosamente"
            );
            res.status(204).json(response);
          } else {
            const response = new apiResponse(
              false,
              null,
              404,
              "Vehiculo no encontrado"
            );
            res.status(404).json(response);
          }
        } catch (error) {
          const response = new apiResponse(
            false,
            null,
            500,
            "Error del servidor al eliminar Vehiculo"
          );
          res.status(500).json(response);
        }
      }
}
