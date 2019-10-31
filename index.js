'use strict';

const Hapi = require('@hapi/hapi');
const Log = require('./logs/logger.js')

// comment after first run
const db = require('./app/config/db.js');
var routes = require('./app/routes');

const server = Hapi.server({
    port: 9999,
    host: '0.0.0.0'
});

//comment after first run
// db.sequelize.sync({ force:true }).then( () => {
//     initial();
// });

// //comment after first run
// function initial() {
//     db.role.create({
//         id: 1,
//         name: "USER"
//     });

//     db.role.create({
//         id: 2,
//         name: "ADMIN"
//     })
// }

const init = async () => {
    try {
    await server.route(routes);
    await server.start()
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
    console.log('Server running at:', server.info.uri)
    server.events.on('response', (request) => {
        Log(request);
    });
};

init();