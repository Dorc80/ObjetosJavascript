// Desafio 1
function printStudents(students) {

    for (var i = 0; i < students.length; i++) {
        console.log('Name: ' + students[i].name + ', Cohort:' + students[i].cohort);
    }

}

let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

printStudents(students);

// Desafio 2
function printUsers(usersobj) {

    let users = [usersobj.employees, usersobj.managers];

    for (var i = 0; i < users.length; i++) {

        if (i == 0) {
            console.log('EMPLOYEES');
        } else {
            console.log('MANAGERS');
        }

        for (var j = 0; j < users[i].length; j++) {
            let firstName = users[i][j].first_name.toUpperCase();
            let lastName = users[i][j].last_name.toUpperCase();
            console.log((j + 1) + ' - ' + lastName + ', ' + firstName + ' - ' + (firstName.length + lastName.length));
        }
    }

}

let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

printUsers(users);