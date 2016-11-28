
var Joi = require('joi');

var common = {
    "allowOutbound": Joi.boolean().required().default(true),
    "restrictedPrefixes": Joi.array().items(
        Joi.string().required()
    ).sparse(),
    "excludedPrefixes": Joi.array().items(
        Joi.string().required()
    ).sparse(),    
    "record": Joi.boolean().required().default(false),
};

module.exports = common;