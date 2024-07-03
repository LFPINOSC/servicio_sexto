import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Vehiculo = sequelize.define('Vehiculo', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  placa: {
    type: DataTypes.STRING(255),
    primaryKey: true,
    autoIncrementIdentity: true,
  },
  marca: {
    type: DataTypes.STRING(75),
    allowNull: true,
    field: 'marca',
  },
  modelo: {
    type: DataTypes.STRING(75),
    allowNull: true,
    field: 'modelo',
  },
  Anio: {
    type: DataTypes.STRING(75),
    allowNull: false,
    field: 'Año',
  },
  estaActivo: {
    type: DataTypes.SMALLINT, 
    allowNull: false,
    defaultValue: 1,
  },
  // Otros campos de tipo de usuario
});
export default Vehiculo;