import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const Parada = sequelize.define('Parada', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  Nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'Nombre',
  },
  CordenadaX: {
    type: DataTypes.GEOMETRY, 
    allowNull: false,
    defaultValue: 1,
  },
  CordenadaY: {
    type: DataTypes.GEOMETRY, 
    allowNull: false,
    defaultValue: 1,
  },
  estaActivo: {
    type: DataTypes.SMALLINT, 
    allowNull: false,
    defaultValue: 1,
  },
  // Otros campos de tipo de usuario
});
export default TipoUsuario;