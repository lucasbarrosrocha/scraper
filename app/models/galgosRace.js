module.exports = (sequelize, DataTypes) => {
    const GalgosRace = sequelize.define('GalgosRace', {
        idSportinglife: DataTypes.INTEGER,
        date: DataTypes.DATE,
        hour: DataTypes.STRING,
        name: DataTypes.STRING,
        classe: DataTypes.STRING,
        amountRunners: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        oddP1: DataTypes.FLOAT,
        oddP2: DataTypes.FLOAT,
        oddP3: DataTypes.FLOAT,
        oddP4: DataTypes.FLOAT,
        oddP5: DataTypes.FLOAT,
        oddP6: DataTypes.FLOAT,
        oddP1Dec: DataTypes.STRING,
        oddP2Dec: DataTypes.STRING,
        oddP3Dec: DataTypes.STRING,
        oddP4Dec: DataTypes.STRING,
        oddP5Dec: DataTypes.STRING,
        oddP6Dec: DataTypes.STRING,
        premiumP1: DataTypes.STRING,
        premiumP2: DataTypes.STRING,
        premiumP3: DataTypes.STRING,
    });

    return GalgosRace;
}