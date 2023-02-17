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
        details: DataTypes.STRING,
        when_created: DataTypes.DATE
    })
}