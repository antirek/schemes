
var Joi = require('joi');

var vpbxSettings = Joi.object().keys({
    "_id": Joi.string().required(),
    vpbxId: Joi.string().required(),
    category: Joi.string().required().valid(['premium', 'standard'])
});

module.exports = vpbxSettings;