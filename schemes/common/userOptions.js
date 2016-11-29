
var Joi = require('joi');

var common = {    
    "restrictedPrefixes": Joi.array().items(
        Joi.string()
    ).sparse(),
    "excludedPrefixes": Joi.array().items(
        Joi.string()
    ).sparse(),    
    "record": Joi.boolean().required().default(false),
};

module.exports = common;