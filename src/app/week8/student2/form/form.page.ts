import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student2 } from '../../student2.model';
import {Student2Service} from '../../student2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  
  constructor(
    private students2Srv: Student2Service,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    console.log(form);

    const student: Student2 = 
    {
      nim:form.value.nim,
      nama:form.value.nama,
      prodi:form.value.prodi,
    };
    this.students2Srv.addStudent(student);
    this.router.navigateByUrl('/student2');
  }

}
