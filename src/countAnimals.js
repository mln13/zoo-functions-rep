const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, valorAtual) => {
      acc[valorAtual.name] = valorAtual.residents.length;
      return acc;
    }, {});
  } if (!animal.sex) {
    const identifySpecies = data.species.find((animalType) => animal.specie
      .includes(animalType.name));
    const countNoSex = identifySpecies.residents.length;
    return countNoSex;
  }
  const identifySpecies = data.species.find((animalType) => animal.specie
    .includes(animalType.name));
  const counting = identifySpecies.residents
    .reduce((count, animalNumber) => (animalNumber.sex
      .includes(animal.sex) ? count + 1 : count), 0);
  return counting;
}

module.exports = countAnimals;
