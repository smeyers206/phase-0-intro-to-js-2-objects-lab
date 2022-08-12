const employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  let newInfo = { ...employee };
  newInfo[key] = value;
  return newInfo;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey() {
  const newContact = { ...employee.key };
  return newContact;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
