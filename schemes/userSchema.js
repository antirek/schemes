var Joi = require('joi');
var routes = require('./routes');

var userOptions = require('./common/userOptions');

var user = {
    params: Joi.object().keys({
        "mobile": Joi.string(),
        "email": Joi.string().email(),
        "operator": Joi.boolean(),
        "pincode": Joi.string().length(5).alphanum()
            .when('operator', {is: true, then: Joi.required()}),
        "objects": Joi.array().items(
            Joi.object().keys({
                "type": Joi.string().required().valid(["peer", "voicemail"]),
                "id": Joi.string().required()
            })
        ),
        "userkey": Joi.string().length(16).alphanum(),
        "currentInterface": Joi.string(),
        "pause": Joi.boolean()
    })
    .keys(userOptions),
    routes: Joi.object().keys({
        default: routes.standard
    })
};


module.exports = user;
