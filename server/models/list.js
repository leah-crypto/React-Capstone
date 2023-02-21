const { DataTypes } = require("sequelize");

const { sequelize } = require("../utli/database");

module.exports = {
    list: sequelize.define("list", {
        list_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          mass: {
            type: DataTypes.FLOAT,
            allowNull: false
          },
          radius: {
            type: DataTypes.FLOAT,
            allowNull: false
          },
          temperature: {
            type: DataTypes.FLOAT,
            allowNull: false
          },
          distanceLightYear: {
            type: DataTypes.FLOAT,
            allowNull: false
          }
    })
}