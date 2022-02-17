var Student = /** @class */ (function () {
    function Student(sid, sname, sclass) {
        this.sid = sid;
        this.sname = sname;
        this.sclass = sclass;
    }
    Student.prototype.display = function () {
        console.log(this.sid);
        console.log(this.sname);
        console.log(this.sclass);
    };
    return Student;
}());
var std = new Student(12345, "Maham Ali", 2);
std.display();
