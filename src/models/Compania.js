import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Compania = sequelize.define('Compania', {
  id: {
    type: DataTypes.STRING(13),
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true, 
  },

  ruc: {
    type: DataTypes.STRING(13),
    allowNull: false,
    field: 'ruc', 
  },

  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'nombre',
  },
  telefono: {
    type: DataTypes.STRING(10),
    allowNull: false,
    field: 'telefono',
  },
  
  
  descripcion: {
    type: DataTypes.STRING(75),
    allowNull: false,
    field: 'descripcion',
  },
  estaActivo: {
    type: DataTypes.SMALLINT, 
    allowNull: false,
    defaultValue: 1,
  },
  // Otros campos de tipo de usuario
});
export default TipoUsuario;