var Joi = require('joi');
var routes = require('./routes');

var timeday = {
    params: Joi.any(),
    routes: Joi.object().keys({
        default: routes.interval,
        times: Joi.array().items(routes.interval)
    })
};

module.exports = timeday;