var Joi = require('joi');
var routes = require('./routes');

var incoming = {
    params: Joi.any(),
    routes: Joi.object().keys({
        "default": routes.standard
    })
};


module.exports = incoming;