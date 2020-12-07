const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./users/users-router')
const loginRouter = require('./api/auth/auth-router')

const server = express();

server.use(helmet()); server.use(cors()); server.use(express.json());

server.use('/api/auth', loginRouter);

server.use('/api/users', usersRouter);

server.get('/', (req, res) => { res.send("Server is running"); });

module.exports = server;