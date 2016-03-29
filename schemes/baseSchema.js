var Joi = require('joi');

var peer = require('./peerSchema');
var user = require('./userSchema');


var baseSchema = Joi.object().keys({
    "_id": Joi.string().required(),
    "extension": Joi.string(),
    "type": Joi.string().required().valid("peer", "ivr", "user", "timeweek", "timeday", "incoming", "queue", "group"),
    "context": Joi.string(),
    "title" : Joi.string().required(),
    "vpbxId": Joi.string().required(),
    "params": Joi.any()
    	.when(
    		'type', {is: 'peer', then: peer.params}
    	)
    	.when(
    		'type', {is: 'user', then: user.params}
    	),
    "routes": Joi.any()
    	.when(
    		'type', {is: 'peer', then: peer.routes}
    	)
});

module.exports = baseSchema;