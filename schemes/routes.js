var Joi = require('joi');
var types = require('./types');

var id = Joi.alternatives().when('type', {
    is: 'sayunixtime', then: '', otherwise: Joi.string().required()
})

var route = {
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
    peergroup: Joi.object().keys({
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
    day: Joi.object().keys({
        day: Joi.string().required(),
        type: Joi.string().required().valid(types),
        id: id
    })
};

module.exports = route;