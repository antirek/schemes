var Joi = require('joi');
var routes = require('./routes');

var ivr = {
    params: Joi.object().keys({
        "email": Joi.string().required()
    }),
    routes: Joi.any()
};

module.exports = ivr;