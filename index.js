/* Your Code Here */
function createEmployeeRecord(employee){
   return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
   }
}

function createEmployeeRecords(employees){
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(event){
    const [date, hour] = event.split(" ")
    const eventObject = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    }

    this.timeInEvents.push(eventObject);
    return this;
}

function createTimeOutEvent(event){
    const [date, hour] = event.split(" ")
    const eventObject = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }

    this.timeOutEvents.push(eventObject);
    return this;
}

function hoursWorkedOnDate(date){
    const inTime = this.timeInEvents.find(event => event.date === date);
    const outTime = this.timeOutEvents.find(event => event.date === date);

    return (outTime.hour - inTime.hour)/100
}

function wagesEarnedOnDate(date){
    const hours = hoursWorkedOnDate.call(this, date);
    return this.payPerHour * hours
}

function calculatePayroll(employeeRecords){
    const record = employeeRecords.map(employee => allWagesFor.call(employee))
    return record.reduce((currentValue, total) => currentValue + total)
 }

 function findEmployeeByFirstName(employees, firstNameString){
    console.table(employees)
    return employees.find(emp => emp.firstName === firstNameString)
 }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

