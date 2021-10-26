const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  const findName = data.employees
    .find((employee) => employeeName
      .includes(employee.firstName) || employeeName.includes(employee.lastName));
  return findName;
};

module.exports = getEmployeeByName;
