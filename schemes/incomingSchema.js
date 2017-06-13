var Joi = require('joi');
var routes = require('./routes');

var incoming = {
    params: Joi.object().keys({
        record: Joi.boolean().default(false),
        lines: Joi.string().required(),
        routingCode: Joi.string(),
        queuelines: Joi.string(),
        category: Joi.string(),
        checkBlacklist: Joi.boolean().default(false),
        sendMetrics: Joi.boolean().default(true)

    }),
    routes: Joi.object().keys({
        "default": routes.standard
    })
};


module.exports = incoming;