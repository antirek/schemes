var Joi = require('joi');
var routes = require('./routes');

var cid = {
    params: Joi.any(),
    routes: Joi.object().keys({
        default: routes.standard,
        regions: Joi.array().items(routes.region),
        templates: Joi.array().items(routes.template)
    })
};


module.exports = cid;