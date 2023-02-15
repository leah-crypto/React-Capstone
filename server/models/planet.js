const { DataType } = require('sequelize');
const { sequelize } = require('../utli/database')

module.exports = {
    planet: sequelize.define('planet', {
        planet_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        
    })
}