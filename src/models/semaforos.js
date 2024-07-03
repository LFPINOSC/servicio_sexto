import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';

const semaforos = sequelize.define('semaforos', {
 id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  modelo: {
    type: DataTypes.STRING(75),
    allowNull: false,
    field: 'descripcion',
  },
  estaActivo: {
    type: DataTypes.SMALLINT, 
    allowNull: false,
    defaultValue: 1,
  },
  cordenadax: {
    type: DataTypes.GEOMETRY, 
    allowNull: false,
    defaultValue: 1,
  },
  cordenaday: {
    type: DataTypes.GEOMETRgit , 
    allowNull: false,
    defaultValue: 1,
  },
  // Otros campos de tipo de usuario
});
export default TipoUsuario;