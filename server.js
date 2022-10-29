const http = require('http');
const app = require('./app');

require('dotenv').config();
require('express-async-errors');

const PORT = process.env.PORT || 3200;

const server = http.createServer(app);

function createServer(){
    try {
        // Hello world
        server.listen(PORT, () => {
            console.log(`Listening on the port: ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

createServer();