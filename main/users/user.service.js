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
    // const user = await db.User.scope('withHash').findOne({ where: { email } });
    // if (!user || !(await bcrypt.compare(password, user.hash)))
    //     throw 'Username or password is incorrect';
         
    //     // authentication successful
    // const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
    // return { ...omitHash(user.get()), token };

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
        var accessToken = makeid(10)+'.'+makeid(5);
        const token = jwt.sign({ sub: user.user_id }, config.secret, { expiresIn: '1d' });
        // var token_ = { ...omitHash(user.get()), token };
        var userData = {
            "accessToken": accessToken,
            "token": token,
            "user_id": user.user_id,
            "name": user.name,
            "contact": user.contact,
            "email": user.email,
            "username": user.username
        }
        await db.login.create(userData);

        return {
            status: 200,
            message: 'User found.',
            result: {accessToken : accessToken, bearer: token, userData: userData}
        }
    } else {
        return {
            status: 401,
            message: 'User not found.'
        }
    }
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
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