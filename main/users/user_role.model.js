const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        
        role_name: { type: DataTypes.STRING, allowNull: false },
        priority: { type: DataTypes.INTEGER, allowNull: false },
        status: { type: DataTypes.TINYINT, allowNull: false },
        added_by: { type: DataTypes.INTEGER, allowNull: false },
        added_date: { type: DataTypes.DATE, allowNull: false },

    };
     return sequelize.define('user_role', attributes);
}