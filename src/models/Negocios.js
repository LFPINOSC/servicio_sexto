import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
import calle from './Calle.js';

const Negocios = sequelize.define('Negocios', {
  id: {
    type: DataTypes.STRING(13),
    primaryKey: true,
    autoIncrement: true,
    autoIncrementIdentity: true,
  },
  Ruc: {
    type: DataTypes.STRING(13),
    allowNull: false,
    field: 'Ruc',
  },
  Nombre: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'Nombre_negocio',
  },
  Telefono: {
    type: DataTypes.STRING(10),
    allowNull: false,
    field: 'Telefono_negocio',
  },
  NombrePropietario: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'Nombre_propietario',
  },
  estaActivo: {
    type: DataTypes.SMALLINT, 
    allowNull: false,
    defaultValue: 1,
  },
  // Otros campos de tipo de usuario
});
Negocios.belongsTo(calle, {
  foreignKey: 'CalleSecuencial', // Nombre del campo de clave externa en la tabla de Usuario con relacion a tipo de usuario
});
export default Negocios;