const db = require('../../data/db-config');

module.exports = {
    getInventory,
    findInventoryById,
    updateInventory,
    removeInventory,
}

function getInventory() {
    return db.select("*").from('inventory')
}

function findInventoryById(id) {
    return db('inventory')
    .where({id})
    .first()
}

function updateInventory(changes, id){
    return db('inventory')
    .where({id})
    .update(changes)
    .then(count=> {
        if (count > 0) {
            return findInventoryById(id)
        } else {
            return null;
        }
    })
}

function removeInventory (id) {
    return db('inventory')
    .where('id', id)
    .del()
}