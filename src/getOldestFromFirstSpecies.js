const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employeId = data.employees.find((whichId) => id.includes(whichId.id));
  const animalInfo = data.species
    .find((animal) => animal.id.includes(employeId.responsibleFor[0]));
  const oldestAnimal = animalInfo.residents.reduce((count, old) => {
    if (old.age >= count) {
      return old.age;
    }
    return count;
  }, 0);
  const objetoAnimal = animalInfo.residents
    .find((oldAnimal) => oldAnimal.age === oldestAnimal);

  return Object.values(objetoAnimal);
};

module.exports = getOldestFromFirstSpecies;
