
var Joi = require('joi');
var routes = require('./routes');

var ivr = {
    params: Joi.object().keys({
        "soundId": Joi.string().required(),
        "timeout": Joi.string().required(),
        "passToInternal": Joi.boolean().default(false),
        "attempts": Joi.string().required(),
        "answer": Joi.boolean().default(true),
        "repeat": Joi.string().required()
    }),
    routes: Joi.object().keys({
        keys: Joi.array().items(routes.key),
        default: routes.standard
    })
};

module.exports = ivr;