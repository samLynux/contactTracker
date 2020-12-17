import { Injectable } from '@angular/core';
import {Student1} from './student1.model';

@Injectable({
  providedIn: 'root'
})
export class Student1Service {
  private students: Student1[] = [
    {nim:'samuel', nama:'000004214151', prodi:'sam@student.id'},
    {nim:'jack', nama:'500-144', prodi:'jack@realemail.com'}
  ]

  constructor() { }

  getAllStudents()
  {
    return [...this.students];
  }
  getStudent(nim:string)
  {
    return {...this.students.find(students => {
      return students.nim === nim;
    })}
  }

  addStudent(student: Student1)
  {
    const x = this.students.push(student);
    console.log(x);
  }

  editStudent(student: Student1)
  {
    for(var x=0;x<this.students.length;x++)
    {
      if(this.students[x].nim == student.nim)
      {
        this.students[x].nama = student.nama;
        this.students[x].prodi = student.prodi;

      }
    }
  }

  deleteStudent(studentNIM: string)
  {
    
    this.students = this.students.filter(student =>
      {
        return student.nim !== studentNIM;
      });
  }
}
