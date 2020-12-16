
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inventory').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        {
          id: 1,
          "vin": "1M8GDM9A2KP043111",
          "license_plate":"1ZED234",
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
          "engine": "2.3L",
          "cylinders": "V4",
          "transmission": "Automatic",
          "description": "Runs nice, very fast, comfortable",
          "drivetrain":"2WD",
          "warranty":"none"

        },
        {
          id: 2,
          "vin": "1M8GDM9A7KP042788",
          "license_plate":"1EXE234",
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
          "engine": "5.6L",
          "cylinders": "V8",
          "transmission": "Automatic",
          "description": "Smooth ride, all leather interior",
          "drivetrain":"2WD",
          "warranty":"none"
        },
        {
          id: 3,
          "vin": "1B8G7M9A7KP042799",
          "license_plate":"1WHY234",
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
          "engine": "3.0L",
          "cylinders": "V4",
          "transmission": "Automatic",
          "description": "Impalas are fast",
          "drivetrain":"2WD",
          "warranty":"none"
        }
      ]);
    });
};
