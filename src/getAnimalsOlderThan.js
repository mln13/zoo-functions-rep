const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const verifyByName = data.species.filter((byName) => animal.includes(byName.name));
  const verifyByAge = verifyByName
    .filter((animal2) => animal2.residents.every((byAge) => byAge.age >= age));
  if (verifyByAge.length === 0) { return false; } return true;
}
console.log(getAnimalsOlderThan('bears', 4));

module.exports = getAnimalsOlderThan;
