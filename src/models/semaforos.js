import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js'; 
import calle from "./Calle.js"

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
semaforos.belongsTo(calle, {
  foreignKey: 'CalleSecuencialPrincipal', // Nombre del campo de clave externa en la tabla de Usuario con relacion a tipo de usuario
});
semaforos.belongsTo(calle, {
  foreignKey: 'CalleSecuencialSecundaria', // Nombre del campo de clave externa en la tabla de Usuario con relacion a tipo de usuario
});
export default semaforos;