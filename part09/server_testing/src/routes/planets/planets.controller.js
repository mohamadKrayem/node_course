const planetsDB = require("../../models/planets.model");

function getAllPlanets(req, res) {
   return res.status(200).json(planetsDB);
}

module.exports = {
   getAllPlanets
}