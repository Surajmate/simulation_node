const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const userService = require('./user.service');
const { required } = require('joi');

// routes

router.get('/user_data', authorize(), user_data);
router.post('/login', authenticateSchema, user_login);
router.post('/register', registerSchema, create_user);

module.exports = router;

function registerSchema(req, res, next) {
    const schema = Joi.object({
        name:Joi.string().required(),
        email:Joi.string().required(),
        username:Joi.string().required(),
        contact:Joi.number().required(),
        address:Joi.string().required(),
        password:Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function authenticateSchema(req, res, next) {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function user_data(req, res, next) {
    userService.user_data()
        .then(users => res.json(users))
        .catch(next);
}

function user_login(req, res, next) {
    userService.user_login(req.body)
    .then(user => res.json(user))
    .catch(next);
}

function create_user(req, res, next) {
    userService.create_user(req.body)
    .then(user => res.json(user))
    .catch(next);
}


