var Joi = require('joi');
var types = require('./types');

var id = Joi.any()
    .when('type', {is: 'sayunixtime', then: ''})
    .when('type', {is: 'registrationuser', then: ''})
    .when('type', {is: 'registrationoperator', then: '', otherwise: Joi.string().required()});

var userId = Joi.any()
    .when('type', {is: 'sayunixtime', then: ''})
    .when('type', {is: 'registrationuser', then: ''})
    .when('type', {is: 'registrationoperator', then: '', otherwise: Joi.string()});

var route = {
    user: Joi.object().keys({
        type: Joi.string().valid(types),
        id: userId
    }),
    standard: Joi.object().keys({
        type: Joi.string().required().valid(types),
        id: id
    }),
    interval: Joi.object().keys({
        type: Joi.string().required().valid(types),
        id: id,
        begin: Joi.string().required(),
        end: Joi.string().required()
    }),
    group: Joi.object().keys({
        type: Joi.string().required().valid(types),
        id: id,
        wait: Joi.string().required(),
        duration: Joi.string().required()
    }),
    key: Joi.object().keys({
        type: Joi.string().required().valid(types),
        id: id,
        key: Joi.string().required()
    }),
    free: Joi.object().keys({
        type: Joi.string().required().valid(types)
    }),
    custom: Joi.object().keys({
        type: Joi.string().required().valid(types),
        id: id
    }),
    queue: Joi.object().keys({
        type: Joi.string().valid(types).empty(''),
        id: id.empty('')
    }),
    day: Joi.object().keys({
        day: Joi.string().required(),
        type: Joi.string().required().valid(types),
        id: id
    })
};

module.exports = route;