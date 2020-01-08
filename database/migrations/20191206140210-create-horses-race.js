'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('HorsesRaces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idSportinglife: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      hour: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      place: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      track: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      age: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      amountRunners: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        // allowNull: false,
        type: DataTypes.TEXT,
      },
      oddP1: {
        type: DataTypes.FLOAT,
      },
      oddP2: {
        type: DataTypes.FLOAT,
      },
      oddP3: {
        type: DataTypes.FLOAT,
      },
      oddP4: {
        type: DataTypes.FLOAT,
      },
      oddP5: {
        type: DataTypes.FLOAT,
      },
      oddP6: {
        type: DataTypes.FLOAT,
      },
      oddP7: {
        type: DataTypes.FLOAT,
      },
      oddP8: {
        type: DataTypes.FLOAT,
      },
      oddP9: {
        type: DataTypes.FLOAT,
      },
      oddP10: {
        type: DataTypes.FLOAT,
      },
      oddP11: {
        type: DataTypes.FLOAT,
      },
      oddP12: {
        type: DataTypes.FLOAT,
      },
      oddP1Dec: {
        type: DataTypes.STRING,
      },
      oddP2Dec: {
        type: DataTypes.STRING,
      },
      oddP3Dec: {
        type: DataTypes.STRING,
      },
      oddP4Dec: {
        type: DataTypes.STRING,
      },
      oddP5Dec: {
        type: DataTypes.STRING,
      },
      oddP6Dec: {
        type: DataTypes.STRING,
      },
      oddP7Dec: {
        type: DataTypes.STRING,
      },
      oddP8Dec: {
        type: DataTypes.STRING,
      },
      oddP9Dec: {
        type: DataTypes.STRING,
      },
      oddP10Dec: {
        type: DataTypes.STRING,
      },
      oddP11Dec: {
        type: DataTypes.STRING,
      },
      oddP12Dec: {
        type: DataTypes.STRING,
      },
      premiumP1: {
        type: DataTypes.STRING,
      },
      premiumP2: {
        type: DataTypes.STRING,
      },
      premiumP3: {
        type: DataTypes.STRING,
      },
      premiumP4: {
        type: DataTypes.STRING,
      },
      premiumP5: {
        type: DataTypes.STRING,
      },
      premiumP6: {
        type: DataTypes.STRING,
      },
      premiumP7: {
        type: DataTypes.STRING,
      },
      premiumP8: {
        type: DataTypes.STRING,
      },
      premiumP9: {
        type: DataTypes.STRING,
      },
      premiumP10: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('HorsesRaces');
  }
};
