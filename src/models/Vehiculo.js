import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig.js';
import Dueño from './Dueño.js'
import Compania from './Compania.js'

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
Vehiculo.belongsTo(Dueño, {
  foreignKey: 'Cedula_Dueño', // Nombre del campo de clave externa en la tabla de Usuario con relacion a tipo de usuario
});
Vehiculo.belongsTo(Compania, {
  foreignKey: 'id_Compania', // Nombre del campo de clave externa en la tabla de Usuario con relacion a tipo de usuario
});

export default Vehiculo;