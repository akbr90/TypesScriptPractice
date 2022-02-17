var emp = {
    eid: 12881,
    ename: "Akbar Ali",
    deptNo: 1001,
    dispData: function () {
        console.log(this.eid + " " + this.ename + " " + this.deptNo);
    }
};
console.log(emp.eid);
console.log(emp.ename);
console.log(emp.deptNo);
emp.dispData();
