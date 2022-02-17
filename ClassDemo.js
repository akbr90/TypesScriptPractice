var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setData = function (eid, ename, deptNo) {
        this.eid = eid;
        this.ename = ename;
        this.deptNo = deptNo;
    };
    Employee.prototype.display = function () {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptNo);
    };
    return Employee;
}());
var emp1 = new Employee();
//emp1.eid=12881;
//emp1.ename="Akbar Ali";
//emp1.deptNo=1001;
emp1.setData(12881, "Akbar ALi", 1001);
emp1.display();
