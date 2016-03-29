var Joi = require('joi');

var peer = {
	params: Joi.object().keys({
		"peername": Joi.string().required(),
		"secret": Joi.string().required(),
		"record": Joi.string().required().valid('yes', 'no')
	}),
	routes: Joi.object().keys({
		"default": Joi.object().keys({
			type: Joi.string(),
			id: Joi.string()
		})
	})
};

var user = {
	params: Joi.object().keys({
		"peername": Joi.string().required(),
		"secret": Joi.string().required(),
		"record": Joi.string().required().valid('yes', 'no')
	}),
	routes: Joi.object().keys({

	})
};

var baseSchema = Joi.object().keys({
    "_id": Joi.string().required(),
    "extension": Joi.string(),
    "type": Joi.string().required().valid("peer", "ivr", "user", "timeweek", "timeday"),
    "context": Joi.string(),
    "title" : Joi.string().required(),
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