const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  entrants.reduce((acc, person) => {
    if (person.age < 18) {
      acc.child += 1;
    } if (person.age >= 18 && person.age < 50) {
      acc.adult += 1;
    } if (person.age > 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
};

const calculateEntry = (entrants) => {
  const priceToPay = entrants.reduce((acc, person) => {
    if (person.age < 18) {
      return data.prices.child + acc;
    } if (person.age >= 18 && person.age < 50) {
      return data.prices.adult + acc;
    } if (person.age >= 50) {
      return data.prices.senior + acc;
    }
    return acc;
  }, 0);
  return priceToPay.toFixed(2);
};

module.exports = { calculateEntry, countEntrants };
