
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inventory').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        {
          id: 1,
          "year":"2000",
          "make": 'Toyota',
          "model": "Corolla",
          "mileage": "80000",
          "price": "10000",
          "engine": "2.3L V4 Automatic",
          "description": "Runs nice, very fast, comfortable",
          "drivetrain":"2WD",
          "warranty":"none"

        },
        {
          id: 2,
          "year":"2003",
          "make": 'Mazda',
          "model": "MPV",
          "mileage": "70000",
          "price": "9000",
          "engine": "3.2L V6 Automatic",
          "description": "Runs very nice, comfortable, sunroof",
          "drivetrain":"2WD",
          "warranty":"none"
        },
        {
          id: 3,
          "year":"2006",
          "make": 'Honda',
          "model": "Accord",
          "mileage": "50000",
          "price": "12000",
          "engine": "2.3L V4 Manual",
          "description": "Runs nice, very fast, super comfortable",
          "drivetrain":"2WD",
          "warranty":"none"
        }
      ]);
    });
};
