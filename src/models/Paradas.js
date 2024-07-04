import { DataTypes, ForeignKeyConstraintError } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
import Calle from './Calle.js'

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
Parada.belongsTo(Calle, {
  foreignKey: 'CalleSecuencial', // Nombre del campo de clave externa en la tabla de Usuario con relacion a tipo de usuario
});
export default Paradas;