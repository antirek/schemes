
var Joi = require('joi');

var trunk = Joi.object().keys({
    "_id": Joi.string().required(),
    name: Joi.string().required(),
    title: Joi.string().required(),
    category: Joi.string().required().allow(['standard', 'premium']),
    default: Joi.boolean().required()
});

module.exports = trunk;