class Employee
{
    eid:number;
    ename:string;
    deptNo:number;

    setData(eid:number,ename:string,deptNo:number):void
    {
        this.eid=eid;
        this.ename=ename;
        this.deptNo=deptNo;
    }

    display():void
    {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptNo);
    }
}

var emp1=new Employee();
//emp1.eid=12881;
//emp1.ename="Akbar Ali";
//emp1.deptNo=1001;
emp1.setData(12881,"Akbar ALi",1001);
emp1.display();