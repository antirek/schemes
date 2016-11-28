
var Joi = require('joi');

var common = {    
    "restrictedPrefixes": Joi.array().items(
        Joi.string().required()
    ).sparse(),
    "excludedPrefixes": Joi.array().items(
        Joi.string().required()
    ).sparse(),    
    "record": Joi.boolean().required().default(false),
};

module.exports = common;