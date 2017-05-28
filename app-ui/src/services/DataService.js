class DataService {
    constructor() {
        this.classes = [];
        this.students = {};
        this.studentInfo = {};
        this.initClassData();
    }

    initClassData() {
        for (var i = 1; i <= 12; i++) {
            let classId = 'class_' + i;
            let className = 'Class ' + i;
            this.classes.push({
                name: className,
                id: classId
            });

            var students = [];
            var randomNumberOfStudents = this.getRandomInt(5, 20);
            for (var j = 1; j <= randomNumberOfStudents; j++) {
                let studId = classId + '_student_' + j;
                let studName = "Student " + j;
                students.push({
                    name: studName,
                    id: studId
                });

                this.studentInfo[studId] = {
                    name: studName,
                    id: studId,
                    dob: '@# @#$!!',
                    gender: '@#4',
                    parentGuardian: 'aidojfowije',
                    marks: {
                        maths: this.getRandomInt(0, 100),
                        science: this.getRandomInt(0, 100),
                        english: this.getRandomInt(0, 100)
                    }
                };
            }

            this.students[classId] = students;
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getClasses() {
        return this.classes;
    }

    getStudents(classId) {
        if (!classId) {
            return [];
        }
        return this.students[classId];
    }

    getStudentInfo(studentId) {
        return this.studentInfo[studentId];
    }
}

export default DataService;