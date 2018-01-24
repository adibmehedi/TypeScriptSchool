/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__student__ = __webpack_require__(1);

var students;
var student = new __WEBPACK_IMPORTED_MODULE_0__student__["a" /* Student */]();
var studentListDom = document.getElementById('studentList');
var addStudentButton = document.getElementById('addStudnet');
var inputName = document.getElementById('name');
var inputRoll = document.getElementById('roll');
var inputScore = document.getElementById('score');
addStudentButton.addEventListener('click', addStudentButtonEvent);
function addStudentButtonEvent() {
    student.addStudent(inputName.value, parseInt(inputRoll.value), parseInt(inputScore.value));
    renderStudentList();
    debugger;
}
function renderStudentList() {
    inputName.value = "";
    inputRoll.value = "";
    inputScore.value = "";
    var studentsInfo = student.getStudentsInfo();
    if (studentsInfo == null) {
        studentsInfo = new Array();
    }
    studentListDom.innerHTML = "";
    var listElements = "";
    for (var i = 0; i < studentsInfo.length; i++) {
        console.log("info:", studentsInfo[i]);
        listElements += "<tr> <td>Name:" + studentsInfo[i].name + "</td> <td>Roll:" + studentsInfo[i].roll + "</td><td> Score:" + studentsInfo[i].score + "</td><td> <button class='deleteButton' value='" + studentsInfo[i].guid + "'>X</td></tr>";
    }
    studentListDom.innerHTML = listElements;
    addListButtonEventListeners();
}
function addListButtonEventListeners() {
    var deleteButtons = document.getElementsByClassName('deleteButton');
    console.log("cross", deleteButtons);
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', deleteButtonEventListener);
    }
}
function deleteButtonEventListener() {
    student.deleteStudent(this.value);
    renderStudentList();
}
renderStudentList();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Student; });
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getStorageData = function (key) {
        if (!(localStorage.getItem(key) === null)) {
            var value = localStorage.getItem(key);
            return value;
        }
        else
            return null;
    };
    Student.prototype.addToStorage = function (key, value) {
        localStorage.setItem(key, value);
    };
    Student.prototype.generateGUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    Student.prototype.getStudentsInfo = function () {
        var students = this.getStorageData('students');
        return JSON.parse(students);
    };
    Student.prototype.addStudent = function (studentName, studentRoll, studentScore) {
        var studentsInfo = this.getStudentsInfo();
        if (studentsInfo == null) {
            studentsInfo = new Array();
        }
        var newStudentObj = {
            guid: this.generateGUID(),
            name: studentName,
            roll: studentRoll,
            score: studentScore
        };
        studentsInfo.push(newStudentObj);
        debugger;
        this.addToStorage('students', JSON.stringify(studentsInfo));
    };
    Student.prototype.deleteStudent = function (guid) {
        var studentsInfo = this.getStudentsInfo();
        if (studentsInfo == null) {
            studentsInfo = new Array();
        }
        debugger;
        for (var i = 0; i < studentsInfo.length; i++) {
            if (studentsInfo[i].guid == guid) {
                studentsInfo.splice(i, 1);
            }
        }
        debugger;
        this.addToStorage('students', JSON.stringify(studentsInfo));
    };
    return Student;
}());



/***/ })
/******/ ]);