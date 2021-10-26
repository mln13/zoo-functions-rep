const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce((acc, person) => {
  if (person.age < 18) {
    acc.child += 1;
  } if (person.age >= 18 && person.age < 50) {
    acc.adult += 1;
  } if (person.age >= 50) {
    acc.senior += 1;
  }
  return acc;
}, { child: 0, adult: 0, senior: 0 });

const { child, adult, senior } = prices;

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const priceToPay = entrants.reduce((acc, person) => countEntrants(entrants).child * child
    + countEntrants(entrants).adult * adult
    + countEntrants(entrants).senior * senior, 0);
  return (priceToPay.toFixed(2) * 1);
};

module.exports = { calculateEntry, countEntrants };
