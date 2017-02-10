'use strict';
const path = require('path');

exports.setupAnswers = {
    alias: 'bitcar',
    rootDir: path.normalize('./.bitcar-test'),
    addGithub: true,
    githubUsernames: [ 'carsdotcom' ],
    addBitbucketServer: true,
    bitbucketHost: [ 'git.cars.com' ]
};

exports.resultAnswers = {
    result: 'github.com/carsdotcom/bitcar'
};