var Joi = require('joi');
var routes = require('./routes');

var userOptions = require('./common/userOptions');

var user = {
    params: Joi.object().keys({
        "mobile": Joi.string(),
        "email": Joi.string().email(),
        "pincode": Joi.string().length(5).alphanum().required(),
        "autoQueueLogin": Joi.boolean().required().default(false),
        "userkey": Joi.string().length(16).alphanum(),
        "currentInterface": Joi.string(),
        "basePeerId": Joi.string().required().allow(null)
    })
    .keys(userOptions),
    routes: Joi.object().keys({
        default: routes.standard
    })
};

module.exports = user;