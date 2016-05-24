var Joi = require('joi');
var routes = require('./routes');

var queue = {
    params: Joi.object().keys({
        name: Joi.string().required(),
        record: Joi.boolean().required().default(false),
        operators: Joi.object().keys({
            static: Joi.array().items(
                Joi.object().keys({
                    type: Joi.string().required().allow(['peer', 'outbound']),
                    id: Joi.string().required()
                })
            ),
            dynamic: Joi.array().items(
                Joi.object().keys({
                    type: Joi.string().required().allow(['user']),
                    id: Joi.string().required()
                })
            )
        }),
        musiconhold: Joi.string()
    }),
    routes: Joi.any()
};


module.exports = queue;