var Joi = require('joi');

var peer = require('./peerSchema');
var user = require('./userSchema');
var peergroup = require('./peergroupSchema');
var timeday = require('./timedaySchema');
var timeweek = require('./timeweekSchema');
var ivr = require('./ivrSchema');
var queue = require('./queueSchema');
var incoming = require('./incomingSchema');
var voicemail = require('./voicemailSchema');
var service = require('./serviceSchema');

var types = require('./types');

var baseSchema = Joi.object().keys({
    "_id": Joi.string().required(),

    "extension": Joi.string()
        .when('type', {
            is: ['peer', 'incoming', 'user', 'service'],
            then: Joi.required(),
            otherwise: Joi.allow(null)
        }),

    "type": Joi.string().required().valid(types),
    "context": Joi.string().allow(['internal', 'incoming']),
    "title": Joi.string().required(),
    "vpbxId": Joi.string().required(),

    "params": Joi.any()
        .when('type', {is: 'peer', then: peer.params})
        .when('type', {is: 'user', then: user.params})
        .when('type', {is: 'peergroup', then: peergroup.params})
        .when('type', {is: 'timeday', then: timeday.params})
        .when('type', {is: 'timeweek', then: timeweek.params})
        .when('type', {is: 'ivr', then: ivr.params})
        .when('type', {is: 'queue', then: queue.params})
        .when('type', {is: 'incoming', then: incoming.params})
        .when('type', {is: 'voicemail', then: voicemail.params})
        .when('type', {is: 'service', then: service.params})
    ,
    "routes": Joi.any()
        .when('type', {is: 'peer', then: peer.routes})
        .when('type', {is: 'user', then: user.routes})
        .when('type', {is: 'peergroup', then: peergroup.routes})
        .when('type', {is: 'timeday', then: timeday.routes})
        .when('type', {is: 'timeweek', then: timeweek.routes})
        .when('type', {is: 'ivr', then: ivr.routes})
        .when('type', {is: 'queue', then: queue.routes})
        .when('type', {is: 'incoming', then: incoming.routes})
        .when('type', {is: 'voicemail', then: voicemail.routes})
        .when('type', {is: 'service', then: service.routes})
});

module.exports = baseSchema;