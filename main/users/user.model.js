const {
    DataTypes
} = require('sequelize');

module.exports = {users, login};

function users(sequelize) {
    const attributes = {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    };

    const options = {
        defaultScope: {
            attributes: {
                exclude: ['hash']
            }
        },
        scopes: {
            withHash: {
                attributes: {},
            }
        }
    };
    return sequelize.define('users', attributes, options);
}

function login(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        accessToken: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false
        }
    };

    const options = {
        defaultScope: {
            attributes: {
                exclude: ['hash']
            }
        },
        scopes: {
            withHash: {
                attributes: {},
            }
        }
    };
    return sequelize.define('login', attributes, options);
}