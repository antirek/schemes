
var Joi = require('joi');

var vpbxSettings = Joi.object().keys({
    "_id": Joi.string().required(),
    vpbxId: Joi.string().required(),
    params: Joi.object().keys({
        category: Joi.string().required().valid(['premium', 'standard']),
        domain: Joi.string(),
        availableExternalCallerids: Joi.array().items(
            Joi.object().keys({
                callerid: Joi.string().required(),
                code: Joi.string().required()
            })
        )
    })
});

module.exports = vpbxSettings;