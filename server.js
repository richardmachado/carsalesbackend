const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./users/users-router');
const loginRouter = require('./api/auth/auth-router');
const inventoryRouter = require('./api/inventory/inventory-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', loginRouter);

server.use('/api/users', usersRouter);

server.use('/api/inventory', inventoryRouter);

server.get('/', (req, res) => { res.send("Server is running"); });

module.exports = server;