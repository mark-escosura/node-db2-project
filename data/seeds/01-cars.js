// STRETCH
const cars = [
  {
    make: "toyota",
    mileage: 250000,
    model: "prius",
    title: "salvage",
    transmission: "cvt",
    vin: "11111111111111111",
  },
  {
    make: "ford",
    mileage: 120000,
    model: "mustang",
    title: "clean",
    transmission: "manual",
    vin: "22222222222222222",
  },
  {
    make: "honda",
    mileage: 220000,
    model: "accord",
    title: "clean",
    vin: "33333333333333333",
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
