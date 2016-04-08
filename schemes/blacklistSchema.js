
var Joi = require('joi');

var blacklist = Joi.object().keys({
    "_id": Joi.string().required(),
    vpbxId: Joi.string().required(),
    number: Joi.string().required()
});

module.exports = blacklist;