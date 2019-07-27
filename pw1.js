
// PW-1

let students = [
    {
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
    },
    {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
    },
    {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
    }
];
/* 1. Print each student in this format:
   Name: Amna
   Gender: Female
   City: Karachi
   Score: 56 marks
*/

for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "f") {
        console.log("Name: " + students[i].name + "\nGender: female" + "\ncity: " +
            students[i].address.city + "\nScore: " + students[i].admissionTestScore + " marks");
    } else {
        console.log("Name: " + students[i].name + "\nGender: Male" + "\ncity: " +
            students[i].address.city + "\nScore: " + students[i].admissionTestScore + " marks");
    }
}


// 2. Print names of female students only.
for (let i = 0; i < students.length; i++) {

    if (students[i].gender === "f") {
        console.log(students[i].name);
    }
}

// 3. Print names of male students only
for (let i = 0; i < students.length; i++) {

    if (students[i].gender === "m") {
        console.log(students[i].name);
    }
}

// 4. Print names of students who have passed the admission test. Passing marks are 50
for (let i = 0; i < students.length; i++) {
    if (students[i].admissionTestScore >= 50) {
        console.log(students[i].name);
    }
}

// 5. Print names of eligible students only (students who have internet and live in Karachi are eligible)
for (let i = 0; i < students.length; i++) {
    if (students[i].hasInternet == true && students[i].address.city == "Karachi") {
        console.log(students[i].name);
    }
}

/* 6. Print address of each student in this format:
      Amna's address:
      Gulistan-e-Johar in Karachi, Pakistan.
*/
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + "'s address: " + "\n" + students[i].address.ilaqa + " " +
        students[i].address.city + ", " + students[i].address.country + " " + students[i].address.postalCode);

}

// 7. Print names and phone number of students who have Ufone.
for (let i = 0; i < students.length; i++) {
    if (students[i].phoneNo.charAt(2) == "3" && students[i].phoneNo.charAt(3) <= "7") {
        console.log(students[i].name + "'s No.: " + " " + students[i].phoneNo);
    }
}

/*   8. Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, in the below format:
     Group A:  name1, name2
     Group B:  name3, name4, name5
*/
let groupA = [];
let groupB = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].hasJob == true || students[i].hasSchoolBefore == true) {
        groupB.push(students[i].name);

    } else {
        groupA.push(students[i].name);
    }
}
console.log("Group A: " + groupA.join(", "));
console.log("Group B: " + groupB.join(", "));

/* 9. Print age of each student in the below format:
      Amna's age is 29 years
 */

/*
pseudo code:
    - get year 
    - get today year
    - today year -- year + 1
    - get month
    - get today month
    
*/
// let today = new Date();

// ----> solved by me

// for (let i = 0; i < students.length; i++) {
//     let today = new Date();
//     let birthDate = students[i].dob;
//     let age = today.getFullYear() - birthDate.getFullYear();

//     let todayMonth = today.getMonth()
//     let birthdayMonth = birthDate.getMonth();
//     if (todayMonth < birthdayMonth) {
//         age - 1;
//     }
//     console.log(students[i].name + "'s age is " + age + " years");
// }
// ----> solved by ma'am.

function calculateAge(dateOfBirth) {
    let dobYear = dateOfBirth.getFullYear();
    let todayYear = new Date().getFullYear();
    let age = todayYear - dobYear;

    let dobMonth = dateOfBirth.getMonth();
    let todayMonth = new Date().getMonth();

    if (todayMonth < dobMonth) {
        age--;
    } else if (todayMonth === dobMonth) {

        let todayDate = new Date().getDate();
        let dobDate = dateOfBirth.getdate();

        if (todayDate < dobDate) {
            age--;
        }
    }
    return age;
}
for (let i = 0; i < students.length; i++) {
    let studentAge = calculateAge(students[i].dob);
    
    console.log(`${students[i].name}'s age is ${studentAge} years`);
}


// 10. Print the name of the oldest student

let oldestStudent = students[0];
for (let i = 1; i < students.length; i++) {
    let oldestStudentAge = calculateAge(oldestStudents.dob);
    let currentStudentAge = calculateAge(students[i].dob); 

    if (currentStudentAge > oldestStudentAge) {
        oldestStudent = students[i];
    }
}
console.log(`oldest student is: ${oldestStudent.name}`);

