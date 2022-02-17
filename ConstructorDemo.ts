class Student{

    sid:number;
    sname:string;
    sclass:number;

    constructor(sid:number,sname:string,sclass:number){

        this.sid=sid;
        this.sname=sname;
        this.sclass=sclass;

    }

    display():void
    {
        console.log(this.sid);
        console.log(this.sname);
        console.log(this.sclass);
    }
}

var std=new Student(12345,"Maham Ali", 2);
std.display();
