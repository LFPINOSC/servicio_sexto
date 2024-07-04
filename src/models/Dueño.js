import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Dueño = sequelize.define('Dueño', {
  Cedula: {
    type: DataTypes.STRING(20),
    primaryKey: true,

  },
  Nombre: {
    type: DataTypes.STRING(75),
    allowNull: false,
    field: 'Nombre',
  },
  Apellido: {
    type: DataTypes.STRING(30), 
    allowNull: false,
    field:"Apellido",
  },
  Telefono: {
    type: DataTypes.STRING(20), 
    allowNull: false,
    field:"Telefono",
  },
  Direccion: {
    type: DataTypes.STRING(50), 
    allowNull: false,
    field:"Direccion",
  },
  estaActivo: {
    type: DataTypes.SMALLINT, 
    allowNull: false,
    defaultValue: 1,
  },
  // Otros campos de tipo de usuario
});
export default Dueño;