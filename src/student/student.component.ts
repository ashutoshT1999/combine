import { Component } from "@angular/core";

@Component({
    selector:"student",
    templateUrl:"./student.component.html",
    styleUrls:["./student.component.css"]
})

export class studentclass{
    studentinfo:any=[
        {name:"A",gender:"female",rollno:"1",math:25,english:26,hindi:77,physics:28},
        {name:"B",gender:"male",rollno:"2",math:65,english:26,hindi:67,physics:98},
        {name:"C",gender:"female",rollno:"3",math:25,english:26,hindi:27,physics:28},
        {name:"D",gender:"male",rollno:"4",math:85,english:26,hindi:87,physics:88},
        {name:"E",gender:"female",rollno:"5",math:25,english:26,hindi:27,physics:28},
        {name:"F",gender:"male",rollno:"2",math:65,english:26,hindi:67,physics:98},
        {name:"F",gender:"male",rollno:"2",math:6,english:66,hindi:67,physics:98},
        {name:"F",gender:"male",rollno:"2",math:25,english:66,hindi:67,physics:98}
    ]

}