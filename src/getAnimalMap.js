const data = require('../data/zoo_data');

function getAnimalMapWithoutOptions(acc, byLocal, options) {
  const result = {
    ...acc,
    [byLocal.location]: [...(acc[byLocal.location] || []), byLocal.name],
  };
  return result;
}
function filterSexnSort(options, byLocal) {
  const filterBySex = byLocal.residents.filter((resident) => resident.sex.includes(options.sex));
  const filterByName = filterBySex.map((nameAnimals) => nameAnimals.name);
  if (options.sorted) {
    return filterByName.sort();
  }
  return filterByName;
}

function getAnimalMapWithSexnSort(acc, byLocal, options) {
  const result = {
    ...acc,
    [byLocal.location]: [...(acc[byLocal.location] || []),
      { [byLocal.name]: filterSexnSort(options, byLocal) }],
  };
  return result;
}
function getAnimalMapWithNames(acc, byLocal, options) {
  const result = {
    ...acc,
    [byLocal.location]: [...(acc[byLocal.location] || []),
      { [byLocal.name]: byLocal.residents.reduce((acm, anima) => {
        if (options.sorted) {
          return acm.concat(anima.name).sort();
        }
        return acm.concat(anima.name);
      }, []) }],
  };
  return result;
}

function getAnimalMap(options) {
  return data.species.reduce((acc, byLocal) => {
    if (!options || !options.includeNames) {
      return getAnimalMapWithoutOptions(acc, byLocal, options);
    }
    if (options.sex) {
      return getAnimalMapWithSexnSort(acc, byLocal, options);
    }
    return getAnimalMapWithNames(acc, byLocal, options);
  }, {});
}

module.exports = getAnimalMap;
