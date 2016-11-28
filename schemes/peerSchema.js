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
        "timeout": Joi.string(),
        "disallow": Joi.string().required(),
        "allow": Joi.string().required(),
        "lines": Joi.string().default(2),
        "sendrpid": Joi.string().required().valid('yes'),
        "trustrpid": Joi.string().required().valid('yes'),
        "location": Joi.string().allow(''),
        "outgoingNumber": Joi.string().length(11),
        "allowOutbound": Joi.boolean().default(false),
    }).keys(userOptions),
    routes: Joi.object().keys({
        "BUSY": routes.standard,
        "NOANSWER": routes.standard,
        "CHANUNAVAIL": routes.standard,
    })
};

module.exports = peer;
