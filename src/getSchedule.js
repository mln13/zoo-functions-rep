const data = require('../data/zoo_data');

const { hours, species } = data;
function animalDays(day) {
  return species.filter((animePerSpecies) => animePerSpecies.availability.includes(day))
    .reduce((acm, namesAnimal) => acm.concat(namesAnimal.name), []);
}

function getScheduleByDay(scheduleTarget) {
  return {
    [scheduleTarget]: {
      officeHour: (scheduleTarget.includes('Monday') ? 'CLOSED'
        : `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`),
      exhibition: scheduleTarget.includes('Monday') ? 'The zoo will be closed!'
        : animalDays(scheduleTarget),
    },
  };
}

function getDaysByAnimal(scheduleTarget) {
  const animal = species.find((bicho) => bicho.name.includes(scheduleTarget));
  return animal.availability;
}

function getScheduleWithoutParameter() {
  return Object.keys(hours).reduce((acc, day) => {
    const result = {
      ...acc,
      [day]: {
        officeHour: (day.includes('Monday') ? 'CLOSED'
          : `Open from ${hours[day].open}am until ${hours[day].close}pm`),
        exhibition: day.includes('Monday') ? 'The zoo will be closed!' : animalDays(day),
      },
    };
    return result;
  }, {});
}

function getSchedule(scheduleTarget) {
  if (Object.keys(hours).find((day) => day.includes(scheduleTarget))) {
    return getScheduleByDay(scheduleTarget);
  }
  if (species.find((animall) => animall.name.includes(scheduleTarget))) {
    return getDaysByAnimal(scheduleTarget);
  }
  return getScheduleWithoutParameter();
}

module.exports = getSchedule;
