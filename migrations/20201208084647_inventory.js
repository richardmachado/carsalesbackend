
exports.up = function (knex) {
    return knex.schema.createTable('inventory', table => {
        table.increments();
        table.string("year")
            .notNullable();
            table.string("make")
                .notNullable();
            table.string("model")
                .notNullable();
            table.string("mileage")
                .notNullable();
            table.string("price")
                .notNullable();
            table.string("engine")
                .notNullable();
            table.string("description")
                .notNullable();
            table.string("drivetrain")
                .notNullable();
            table.string("warranty")
                .notNullable();

})
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('inventory')
};
