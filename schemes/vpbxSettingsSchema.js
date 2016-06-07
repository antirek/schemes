
var Joi = require('joi');

var vpbxSettings = Joi.object().keys({
    "_id": Joi.string().required(),
    vpbxId: Joi.string().required(),
    params: Joi.object().keys({
        category: Joi.string().required().valid(['premium', 'standard']),
        availableExternalCallerids: Joi.array().items(
            Joi.string().min(7).max(11)
        ),
        domain: Joi.string(),
        outgoingCodes: Joi.array().items(
            Joi.object().keys({
                number: Joi.string().required(),
                code: Joi.string().required()
            })
        )
    })
});

module.exports = vpbxSettings;