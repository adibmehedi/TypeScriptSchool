import { Student } from "./student";

let students: object[];
let student = new Student();

let studentListDom = document.getElementById('studentList');
let addStudentButton = document.getElementById('addStudnet');
let inputName = <HTMLInputElement>document.getElementById('name');
let inputRoll = <HTMLInputElement>document.getElementById('roll');
let inputScore = <HTMLInputElement>document.getElementById('score');

addStudentButton.addEventListener('click', addStudentButtonEvent);

function addStudentButtonEvent() {
        student.addStudent(inputName.value, parseInt(inputRoll.value), parseInt(inputScore.value));
        renderStudentList();
        debugger;
}

function renderStudentList() {
    inputName.value="";
    inputRoll.value="";
    inputScore.value="";
    let studentsInfo = student.getStudentsInfo();
    if (studentsInfo == null) {
        studentsInfo = new Array();
    }

    studentListDom.innerHTML = "";
    let listElements = "";

    for (let i = 0; i < studentsInfo.length; i++) {
        console.log("info:", studentsInfo[i]);
        listElements += "<tr> <td>Name:" + studentsInfo[i].name + "</td> <td>Roll:" + studentsInfo[i].roll + "</td><td> Score:" + studentsInfo[i].score + "</td><td> <button class='deleteButton' value='"+studentsInfo[i].guid+"'>X</td></tr>";
    }
    studentListDom.innerHTML = listElements;
    addListButtonEventListeners();
}

function addListButtonEventListeners(){
    let deleteButtons=document.getElementsByClassName('deleteButton');
    console.log("cross",deleteButtons);
    for(let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click',deleteButtonEventListener);
    }
}

function deleteButtonEventListener(){
    debugger;
    student.deleteStudent(this.value);
    renderStudentList();
}



// student.addStudent('Adib',2,100);
// student.addStudent('Mehedi',1,500);
debugger;
renderStudentList();

console.log("This", document.getElementById('studentList'));





