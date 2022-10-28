const config = require('config.json');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const {
    QueryTypes
} = require('sequelize');
// const mailService = require('../Email/email.service');
module.exports = {
    user_data,
    user_login,
    create_user
};

async function user_data() {
    const users = await db.User.scope('withHash').findAll();
    if(users){
        return {
            status: 200,
            result: users,
            message: 'Users fetched successfully.'
        };
    }else{
        return {
            status: 401,
            result: {},
            message: 'Users Not Found.'
        }; 
    }
}

async function user_login({ email, password }) {
    const existing = await db.User.scope('withHash').findOne({
        where: { email }
    });
    if (existing) {
        const user = await db.User.scope('withHash').findOne({
            where: { email, password }
        });
        if (!user) throw {
            status: 401,
            message: 'Username and password not matched.'
        };
        return {
            status: 200,
            message: 'User found.',
            result: user
        }
    } else {
        return {
            status: 401,
            message: 'User not found.'
        }
    }
}

async function create_user(params) {
    const existing = await db.User.scope('withHash').findOne({
        where: { email: params.email }
    });
    if (existing) {
        return {
            status: 401,
            message: 'User already Exist.',
            result: params
        }
    } else {
        await db.User.create(params);
        return {
            status: 200,
            message: 'User Registeres Successfully.',
            result: params
        }
    }
}