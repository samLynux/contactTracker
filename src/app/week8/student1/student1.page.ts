import { Component, OnInit } from '@angular/core';
import { Student1 } from '../student1.model';
import {Student1Service} from '../student1.service';

@Component({
  selector: 'app-student1',
  templateUrl: './student1.page.html',
  styleUrls: ['./student1.page.scss'],
})
export class Student1Page implements OnInit {
  students: Student1[];
  constructor(
    private students1Srv: Student1Service
  ) { }

  ngOnInit() {
    this.students = this.students1Srv.getAllStudents();
  }
  ionViewWillEnter(){
    this.students = this.students1Srv.getAllStudents();
   }

   deleteThisStudent(studentNIM:string)
   {
     this.students1Srv.deleteStudent(studentNIM);
     this.students = this.students1Srv.getAllStudents();
   }

}
