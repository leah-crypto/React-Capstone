const { DataTypes } = require('sequelize');

const { sequelize } = require('../utli/database')

module.exports = {
    user: sequelize.define("user", {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        uername: DataTypes.VARCHAR(50), //cant remeber if we definethis here
        hashedPass: DataTypes.VARCHAR(50)
    })
}