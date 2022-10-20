const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const userService = require('./user.service');
const { required } = require('joi');

// routes
router.get('/user_data', user_data);

module.exports = router;

function user_data(req, res, next) {
    userService.user_data()
        .then(users => res.json(users))
        .catch(next);
}
