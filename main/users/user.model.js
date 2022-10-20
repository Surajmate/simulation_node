const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        emp_id: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        date_of_birth: { type: DataTypes.DATEONLY, allowNull: false },
        mobilenumber: { type: DataTypes.BIGINT, allowNull: false },
        email_id: { type: DataTypes.STRING, allowNull: false },
        country: { type: DataTypes.STRING, allowNull: false },
        states: { type: DataTypes.INTEGER, allowNull: false },
        city: { type: DataTypes.INTEGER, allowNull: false },
        empToken:{ type: DataTypes.STRING, allowNull: false },
    };

    const options = {
        defaultScope: {
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            withHash: { attributes: {}, }
        }
    };
     return sequelize.define('users', attributes, options);
}



