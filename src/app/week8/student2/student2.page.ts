import { Component, OnInit } from '@angular/core';
import { Student2 } from '../student2.model';
import {Student2Service} from '../student2.service';

@Component({
  selector: 'app-student2',
  templateUrl: './student2.page.html',
  styleUrls: ['./student2.page.scss'],
})
export class Student2Page implements OnInit {

  students: Student2[];
  constructor(
    private students2Srv: Student2Service
  ) { }

  ngOnInit() {
    this.students = this.students2Srv.getAllStudents();
  }

}
