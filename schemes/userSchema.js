var Joi = require('joi');
var routes = require('./routes');

var user = {
    params: Joi.object().keys({
        "mobile": Joi.string(),
        "email": Joi.string().email(),
        "operator": Joi.boolean(),
        "objects": Joi.array().items(
            Joi.object().keys({
                "type": Joi.string().required().valid(["peer", "voicemail"]),
                "id": Joi.string().required()
            })
        )

    }),
    routes: Joi.object().keys({
        default: routes.standard
    })
};


module.exports = user;
