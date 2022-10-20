const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const { QueryTypes } = require('sequelize');
// const mailService = require('../Email/email.service');
module.exports = {
    user_data
};

async function user_data() {
    var obj = {
        status: '200',
        result: {"name":"Rajveer M"},
        message: 'Result fetched successfully.'
    }
    return obj;
}