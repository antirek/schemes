var Joi = require('joi');

var routes = require('./routes');

var userOptions = require('./common/userOptions');

var peer = {
    params: Joi.object().keys({
        "peername": Joi.string().required(),
        "secret": Joi.string().required(),
        "type": Joi.string().required().valid('friend'),
        "host": Joi.string().required().valid('dynamic'),
        "qualify": Joi.string().required(),
        "timeout": Joi.string().required(),     
        "disallow": Joi.string().required(),
        "allow": Joi.string().required(),
        "lines": Joi.string().required()
    }).keys(userOptions),
    routes: Joi.object().keys({
        "BUSY": routes.standard,
        "NOANSWER": routes.standard,
        "CHANUNAVAIL": routes.standard,
    })
};

module.exports = peer;
