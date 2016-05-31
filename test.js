
var peer1 = require('./objects/valid/peer/peer1.json');
var user1 = require('./objects/valid/user/user1.json');
var user2 = require('./objects/valid/user/user2.json');
var peergroup1 = require('./objects/valid/peergroup/peergroup1.json');
var timeday1 = require('./objects/valid/timeday/timeday1.json');
var timeweek1 = require('./objects/valid/timeweek/timeweek1.json');
var incoming1 = require('./objects/valid/incoming/incoming1.json');
var ivr1 = require('./objects/valid/ivr/ivr1.json');
var queue1 = require('./objects/valid/queue/queue1.json');
var voicemail1 = require('./objects/valid/voicemail/voicemail1.json');
var fax1 = require('./objects/valid/fax/fax1.json');

var vpbxSettings1 = require('./objects/valid/vpbxSettings/vpbxSettings1.json');
var blacklist1 = require('./objects/valid/blacklist/blacklist1.json');
var trunk1 = require('./objects/valid/trunk/trunk1.json');

var schemes = require('./index');

var arr = [
    schemes.validate(peer1, schemes.base),
    schemes.validate(user1, schemes.base),
    schemes.validate(user2, schemes.base),
    schemes.validate(peergroup1, schemes.base),
    schemes.validate(timeday1, schemes.base),
    schemes.validate(timeweek1, schemes.base),
    schemes.validate(incoming1, schemes.base),
    schemes.validate(ivr1, schemes.base),
    schemes.validate(queue1, schemes.base),
    schemes.validate(voicemail1, schemes.base),
    schemes.validate(fax1, schemes.base),
    
    schemes.validate(blacklist1, schemes.blacklist),    
    schemes.validate(vpbxSettings1, schemes.vpbxSettings),
    schemes.validate(trunk1, schemes.trunk)
];


Promise.all(arr)
    .then(function (res) {
        console.log('all good');
    })
    .catch(console.log);