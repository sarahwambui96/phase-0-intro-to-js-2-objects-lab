//Initializing object
const employee= {
    name: "Sam",
};

//updateEmployeeWithKeyAndValue(employee, key, value)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { 
        ...employee, 
        streetAddress : "11 Broadway"
    };
    return newEmployee ;
}
//destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee.streetAddress = "12 Broadway";
     return employee;
}
//deleteFromEmployeeByKey(employee, key)
let newEmployee = { ...employee};
function deleteFromEmployeeByKey(employee, key) {
    delete newEmployee.name;
    return newEmployee;
}
//destructivelyDeleteFromEmployeeByKey(employee, key)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}