const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./users/users-router');
const loginRouter = require('./api/auth/auth-router');
const inventoryRouter = require('./api/inventory/inventory-router');

const server = express();
server.use(helmet());
server.use(cors());

const { cloudinary } = require('./helpers/cloudinary');
server.use(express.static('public'));
server.use(express.json({limit:'50mb'}));
server.use(express.urlencoded({ limit: '50mb', extended: true }))

server.use('/api/auth', loginRouter);

server.use('/api/users', usersRouter);

server.use('/api/inventory', inventoryRouter);


server.get('/', (req, res) => { res.send("Server is running"); });

server.get('/api/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression(`folder:dev_setups2 AND tags:'vin'`)
        .sort_by('public_id', "desc")
        .execute();
    const publicIds = resources.map(file => file.public_id);
    res.send(publicIds);

})

server.post('/api/upload', async(req,res) => {
    try {
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            folder: "dev_setups2",
            tags: "vin",
        })
        console.log(uploadedResponse);
        res.json({msg:"you did it!"})
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
})
module.exports = server;