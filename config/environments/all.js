'use strict';

const _             = require('lodash');
const env           = require('./' + (process.env.NODE_ENV || 'development'));

const all           = {
    log : {
        showRouteAtStart : true
    },
    connections : {
        api : {
            host    : '127.0.0.1',
            port    : process.env.PORT || 1254,
            labels  : [ 'api' ]
        }
    }
};

module.exports = _.merge(all, env);
