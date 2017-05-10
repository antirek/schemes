var Joi = require('joi');
var routes = require('./routes');

var userOptions = require('./common/userOptions');

var user = {
    params: Joi.object().keys({
        "mobile": Joi.string(),
        "email": Joi.string().email(),
        "pincode": Joi.string().length(5).alphanum().required(),
        "autoQueueLogin": Joi.boolean().required().default(false),
        "userkey": Joi.string().min(15).max(16).alphanum(),
        "currentInterface": Joi.string().empty(''),
        "basePeerId": Joi.string().empty(''),
        "outgoingNumber": Joi.string().length(11).required(),
        "allowOutbound": Joi.boolean().default(true),
    })
    .keys(userOptions),
    routes: Joi.object().keys({
        direct: Joi.string().allow(['base', 'base_mobile', 'user', 'mobile']).default('base'),
        queue: Joi.string().allow(['base', 'mobile']),
        user: Joi.string().empty(''),
        default: routes.user
    })
};

module.exports = user;