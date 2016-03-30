var Joi = require('joi');

var peer = require('./peerSchema');
var user = require('./userSchema');
var group = require('./groupSchema');
var timeday = require('./timedaySchema');
var timeweek = require('./timeweekSchema');
var ivr = require('./ivrSchema');
var queue = require('./queueSchema');
var incoming = require('./incomingSchema');

var types = require('./types');

var baseSchema = Joi.object().keys({
    "_id": Joi.string().required(),
    "extension": Joi.string(),
    "type": Joi.string().required().valid(types),
    "context": Joi.string(),
    "title" : Joi.string().required(),
    "vpbxId": Joi.string().required(),

    "params": Joi.any()
        .when('type', {is: 'peer', then: peer.params})
        .when('type', {is: 'user', then: user.params})
        .when('type', {is: 'group', then: group.params})
        .when('type', {is: 'timeday', then: timeday.params})
        .when('type', {is: 'timeweek', then: timeweek.params})
        .when('type', {is: 'ivr', then: ivr.params})
        .when('type', {is: 'queue', then: queue.params})
        .when('type', {is: 'incoming', then: incoming.params})
    ,
    "routes": Joi.any()
        .when('type', {is: 'peer', then: peer.routes})
        .when('type', {is: 'user', then: user.routes})
        .when('type', {is: 'group', then: group.routes})
        .when('type', {is: 'timeday', then: timeday.routes})
        .when('type', {is: 'timeweek', then: timeweek.routes})
        .when('type', {is: 'ivr', then: ivr.routes})
        .when('type', {is: 'queue', then: queue.routes})
        .when('type', {is: 'incoming', then: incoming.routes})
});

module.exports = baseSchema;