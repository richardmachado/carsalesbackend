
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inventory').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        {
          id: 1,
          "vin":"1M8GDM9A2KP042788",
          "year":"2000",
          "make": 'Toyota',
          "model": "Corolla",
          "body_type":"Sedan",
          "mileage": "80000",
          "fuel_economy":"25 HWY 20 CITY",
          "price": "10000",
          "color_interior":"Tan",
          "color_exterior": "Blue",
          "fabric":"Cloth",
          "engine": "2.3L V4 Automatic",
          "description": "Runs nice, very fast, comfortable",
          "drivetrain":"2WD",
          "warranty":"none"

        },
        {
          id: 2,
          "vin":"1M8GDM9A7KP042788",
          "year":"2015",
          "make": 'Chevrolet',
          "model": "Suburban",
          "body_type":"SUV",
          "mileage": "20000",
          "fuel_economy":"20 HWY 15 CITY",
          "price": "20000",
          "color_interior":"Black",
          "color_exterior": "Black",
          "fabric":"Leather",
          "engine": "4.8L V8 Automatic",
          "description": "Smooth ride, all leather interior",
          "drivetrain":"2WD",
          "warranty":"none"
        },
        {
          id: 3,
          "vin":"1B8G7M9A7KP042799",
          "year":"2018",
          "make": 'Chevrolet',
          "model": "Impala",
          "body_type":"Sedan",
          "mileage": "2000",
          "fuel_economy":"24 HWY 18 CITY",
          "price": "12000",
          "color_interior":"Tan",
          "color_exterior": "White",
          "fabric":"Cloth",
          "engine": "2.3L V6 Automatic",
          "description": "Impalas are fast",
          "drivetrain":"2WD",
          "warranty":"none"
        }
      ]);
    });
};
