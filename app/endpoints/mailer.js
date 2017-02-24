'use strict';

const handler = require('../handlers/mailer');

exports.register = (server, options, next) => {
    server.route([
        {
            method : 'GET',
            path   : '/connection',
            config : {
                description : 'Test connection route',
                notes       : 'Route pour tester la connection entre hapi-boilerplate et hapi-io',
                tags        : [ 'api' ],
                handler     : handler.connection,
                plugins: {
                    'hapi-io': 'connection'
                }
            }
        },
        {
            method : 'GET',
            path   : '/send-user-create',
            config : {
                description : 'Sent to user when created',
                notes       : 'Route pour envoyer un mail à un utilisateur lors de sa création',
                tags        : [ 'api' ],
                handler     : handler.sendUserCreate,
                plugins: {
                    'hapi-io': 'send-user-create'
                }
            }
        },
        {
            method : 'GET',
            path   : '/send-user-update',
            config : {
                description : 'Sent to user when updated',
                notes       : 'Route pour envoyer un mail à un utilisateur lors de sa mise à jour',
                tags        : [ 'api' ],
                handler     : handler.sendUserUpdate,
                plugins: {
                    'hapi-io': 'send-user-update'
                }
            }
        },
        {
            method : 'GET',
            path   : '/send-user-update-password',
            config : {
                description : 'Sent to user when his password updated',
                notes       : 'Route pour envoyer un mail à un utilisateur lors de sa mise à jour de son mot de passe',
                tags        : [ 'api' ],
                handler     : handler.sendUserUpdatePassword,
                plugins: {
                    'hapi-io': 'send-user-update-password'
                }
            }
        }
    ]);
    next();
};

exports.register.attributes = {
    name : 'mailer-routes'
};