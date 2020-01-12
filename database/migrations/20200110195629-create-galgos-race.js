'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('GalgosRaces', {
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
      classe: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      amountRunners: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      prizes: {
        type: DataTypes.STRING,
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
    return queryInterface.dropTable('GalgosRaces');
  }
};
