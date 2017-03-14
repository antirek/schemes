var Joi = require('joi');
var routes = require('./routes');

var ivr = {
    params: Joi.object().keys({
        "sms": Joi.string(),
        "email": Joi.string(),
        "text": Joi.string().required
    }),
    routes: Joi.object().keys({
        default: routes.standard
    })
};

module.exports = ivr;