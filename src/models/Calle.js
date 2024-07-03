import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Calle = sequelize.define('Calle', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  nombre: {
    type: DataTypes.STRING(75),
    allowNull: false,
    field: 'nombre',
  },
  sentido: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'sentido',
  },
  material: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'material',
  },
  estaActivo: {
    type: DataTypes.SMALLINT, 
    allowNull: false,
    defaultValue: 1,
  },
  // Otros campos de tipo de usuario
});
export default TipoUsuario;