export class Student {

    public getStorageData(key: string) {
        if (!(localStorage.getItem(key) === null)) {
            let value = localStorage.getItem(key);
            return value;
        } else
            return null;
    }

    public addToStorage(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    public generateGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public getStudentsInfo() {
        let students = this.getStorageData('students');
        return JSON.parse(students);
    }

    public addStudent(studentName: string, studentRoll: number, studentScore: number) {
        let studentsInfo = this.getStudentsInfo();
        if (studentsInfo == null) {
            studentsInfo= new Array();
        }
        let newStudentObj={
            guid: this.generateGUID(),
            name: studentName,
            roll: studentRoll,
            score: studentScore
        }
        studentsInfo.push(newStudentObj);
    
        debugger;
        this.addToStorage('students', JSON.stringify(studentsInfo));
    }

    public deleteStudent(guid:number){
        let studentsInfo = this.getStudentsInfo();
        if (studentsInfo == null) {
            studentsInfo= new Array();
        }
        debugger;
        for (let i = 0; i < studentsInfo.length; i++) {
            if (studentsInfo[i].guid == guid) {
                studentsInfo.splice(i, 1);
            }
        }
        debugger;
        this.addToStorage('students',JSON.stringify(studentsInfo));
    }
}