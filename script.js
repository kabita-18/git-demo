const students = document.querySelectorAll('.container');

const StudentContainer = document.querySelector('.newcontainer');

const addstudent = document.querySelector('#button')

const nameInput = document.querySelector('input[name="name"]');

const ageInput = document.querySelector('input[name="age"]');

const registrationno = document.querySelector('input[name="regno"]');

const student = [];

// const insertStudent =(name, age, regno)=> {};

const CreateStudent = ({name, age, regno})=>{
    const StudentDiv = document.createElement('div');
    const studentName = document.createElement('h3');
    const studentAge = document.createElement('h6');
    const studentReg = document.createElement('h6');

    studentName.innerText = "Student name:" + name;
    studentAge.innerText = "Student Age:" + age;
    studentReg.innerText = "Student Reg" + regno;

    StudentDiv.append(studentName,studentAge,studentReg);

    StudentContainer.appendChild(StudentDiv);

    }

addstudent.addEventListener("click",()=>{
    console.log(nameInput.value, ageInput.value, registrationno.value);
    const StudentDiv = document.createElement('div');
    const studentName = document.createElement('h3');
    const studentAge = document.createElement('p');
    const studentReg = document.createElement('p');

    studentName.innerText = "Student name:" + nameInput.value;
    studentAge.innerText = "Student Age:" + ageInput.value;
    studentReg.innerText = "Student Reg" + registrationno.value;

    StudentDiv.append(studentName,studentAge,studentReg);

    StudentContainer.appendChild(StudentDiv);

});
