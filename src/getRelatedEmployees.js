// const data = require('../data/zoo_data');

// function isManager(id) {
//   const getManagers = data.employees
//     .reduce((contador, manageArray) => contador.concat(manageArray.managers), []);
//   const verifyIfManager = getManagers.some((idManager) => idManager.includes(id));
//   return verifyIfManager;
// }

// const getRelatedEmployees = (managerId) => {
//   if (isManager(managerId)) {
//     const CheckEveryPerson = data.employees.filter((managerOf) => {
//       for (let i = 0; i < managerOf.managers.length; i += 1) {
//         if (managerOf.managers[i].includes(managerId)) {
//           return managerOf;
//         }
//       }
//     });
//     const getNames = CheckEveryPerson
//       .reduce((acumulador, eachEmployee) => acumulador
//         .concat(`${eachEmployee.firstName} ${eachEmployee.lastName}`), []);
//     return getNames;
//   }
//   throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
// };

// module.exports = { isManager, getRelatedEmployees };
