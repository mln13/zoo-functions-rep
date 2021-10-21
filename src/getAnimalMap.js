const data = require('../data/zoo_data');

function getAnimalMap(options) {
  if (!options) {
    return data.species.reduce((acc, valorAtual) => {
      acc[valorAtual.location] = valorAtual.name;
      return acc;
    }, {});
  }
}

console.log(getAnimalMap());
module.exports = getAnimalMap;
