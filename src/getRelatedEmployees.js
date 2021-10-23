const data = require('../data/zoo_data');

function isManager(id) {
  const getManagers = data.employees
    .reduce((contador, manageArray) => contador.concat(manageArray.managers), []);
  const verifyIfManager = getManagers.some((idManager) => idManager.includes(id));
  return verifyIfManager;
}

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const CheckEveryPerson = data.employees
    .filter((managerOf) => managerOf.managers.some((yesOrNot) => yesOrNot.includes(managerId)));

  const getNames = CheckEveryPerson
    .reduce((acumulador, eachEmployee) => acumulador
      .concat(`${eachEmployee.firstName} ${eachEmployee.lastName}`), []);
  return getNames;
};

module.exports = { isManager, getRelatedEmployees };
