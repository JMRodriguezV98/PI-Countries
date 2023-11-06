const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Countries', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [ 3,100 ]
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [ 3,100 ]
      }
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [ 3,100 ]
      }
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [ 3,100 ]
      }
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },{ timestamps: false, freezeTableName: true } );
};