
var peer1 = require('./objects/valid/peer/peer1.json');
var user1 = require('./objects/valid/user/user1.json');
var peergroup1 = require('./objects/valid/peergroup/peergroup1.json');
var timeday1 = require('./objects/valid/timeday/timeday1.json');
var timeweek1 = require('./objects/valid/timeweek/timeweek1.json');
var incoming1 = require('./objects/valid/incoming/incoming1.json');
var ivr1 = require('./objects/valid/ivr/ivr1.json');
var queue1 = require('./objects/valid/queue/queue1.json');
var voicemail1 = require('./objects/valid/voicemail/voicemail1.json');

var validate = require('./index');

var arr = [
    validate(peer1),
    validate(user1),
    validate(peergroup1),
    validate(timeday1),
    validate(timeweek1),
    validate(incoming1),
    validate(ivr1),
    validate(queue1),
    validate(voicemail1)
];

Promise.all(arr)
    .then(function (res) {
        console.log('all good');
    })
    .catch(console.log);