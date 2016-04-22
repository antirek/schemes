var Joi = require('joi');
var routes = require('./routes');

var user = {
    params: Joi.object().keys({
        "mobile": Joi.string(),
        "email": Joi.string().email(),
        "operator": Joi.boolean(),
        "pincode": Joi.string().min(4).max(6).alphanum()
            .when('operator', {is: true, then: Joi.required()}),
        "objects": Joi.array().items(
            Joi.object().keys({
                "type": Joi.string().required().valid(["peer", "voicemail"]),
                "id": Joi.string().required()
            })
        ),
        'userkey': Joi.string().length(16).alphanum().required()
    }),
    routes: Joi.object().keys({
        default: routes.standard
    })
};


module.exports = user;
