var Joi = require('joi');
var routes = require('./routes');

var group = {
    params: Joi.object().keys({
        musiconhold: Joi.string(),
        outgoingNumber: Joi.string()
    }),
    routes: Joi.array().items(routes.group)
};

module.exports = group;