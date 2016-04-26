
var Joi = require('joi');

var common = {
    "allowOutbound": Joi.boolean().required().default(true),
    "restrictedPrefixes": Joi.array().items(
        Joi.string().required()
    ).sparse(),
    "excludedPrefixes": Joi.array().items(
        Joi.string().required()
    ).sparse(),
    "outgoingNumber": Joi.string().length(11).required(),
    "record": Joi.boolean().required().default(false),
};

module.exports = common;