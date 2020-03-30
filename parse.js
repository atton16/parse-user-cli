const Parse = require('parse/node');
const config = require('./config');

Parse.serverURL = config.serverURL;
Parse.initialize(config.applicationId, config.javascriptKey, config.masterKey);

module.exports = Parse;
