const express = require('express');

const Inventory = require('./inventory-model');

const router = express.Router();


router.get('/', (req, res) => {
    Inventory.getInventory()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: "Database failed to get users. Contact your backend"})
    })
 });

 

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Inventory.findInventoryById(id)
    .then(user => {
        if (user) {
            res.json(user)
        } else {
            res.status(404).json({message: 'There is no user with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: 'Failed to get user. Contact your backend'})
    })
});

 

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Inventory.findInventoryById(id)
    .then(user => {
        if (user) {
            Inventory.updateInventory(changes, id)
            .then(updatedInventory => {
                res.json(updatedInventory);
            })
        } else {
            res.status(404).json({message: "No vehicle with that id exists"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to update vehicle. Contact your backend"})
    })
});


router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Inventory.removeInventory(id)
    .then(deleted => {
        if (deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: 'No vehicle with that id exists'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Failed to delete vehicle. Contact your backend"})
    })
});

router.post('/', (req, res, next) => {
    const credentials = req.body;


    Inventory.addInventory(credentials)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(err => {
        console.log('Error registering user.', err);
        res.status(500).json({ error: 'Error registering vehicle.' });
    });
})
 



module.exports = router;