const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  const objectById = species.filter((objectAnimal) => ids.includes(objectAnimal.id));
  return objectById;
}

module.exports = getSpeciesByIds;
