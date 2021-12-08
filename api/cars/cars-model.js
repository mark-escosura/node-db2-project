const db = require("../../data/db-config");

/** [getAll] resolves to an array of car records (or an empty array) */
const getAll = async () => {
  const rows = await db('cars')
  .select('vin', 'make', 'model', 'mileage', 'title', 'transmission')
   return rows
}

/** [getById] resolves to a car record by the given id */
const getById = async (carId) => {
  const [rows] = await db("cars")
  .select('vin', 'make', 'model', 'mileage', 'title', 'transmission')
    .where("id", "=", carId);
  return rows;
}
/** [getByVin] resolves to a car record by the given unique vin number  */
const getByVin = (vin) =>{
  return db('cars').where('vin', vin).first()
}

/** [create] resolves to the newly created car record */
const create = async (newCar) => {
  const [carId] = await db("cars").insert(newCar);
  const car = await getById(carId);
  return car
}

module.exports = {
  getAll,
  getById,
  getByVin,
  create
}