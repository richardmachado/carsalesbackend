
exports.up = function (knex) {
    return knex.schema.createTable('inventory', table => {
        table.increments();
        table.string("vin")
            .unique()
            .notNullable();
        table.string("year");
        table.string("make");
        table.string("model");
        table.string("body_type")
        table.string("mileage");
        table.string("fuel_economy");
        table.string("price");
        table.string("color_interior");
        table.string("color_exterior");
        table.string("fabric");
        table.string("engine");
        table.string("drivetrain");
        table.string("warranty");
        table.string("description");


})
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('inventory')
};
