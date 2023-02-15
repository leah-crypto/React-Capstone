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
        details: DataType.VARCHAR(50),
        when_created: DataTypes.TIMESTAMP
    })
}