import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student1 } from '../../student1.model';
import {Student1Service} from '../../student1.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.page.html',
  styleUrls: ['./form-update.page.scss'],
})
export class FormUpdatePage implements OnInit {
  loadedStudent:Student1;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private student1Serv: Student1Service
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap =>
      {
        if(!paramMap.has('studentNIM')){return;}
        const studentNIM = paramMap.get('studentNIM');
        this.loadedStudent = this.student1Serv.getStudent(studentNIM);
      })

    
  }

  onSubmit(form: NgForm)
  {
    
    
    var tempNim = new String;
    var tempNama = new String;
    var tempProdi = new String;

    
    if(form.value.nama == '')
      tempNama = this.loadedStudent.nama;
    else
      tempNama = form.value.nama;
    if(form.value.prodi == '')
      tempProdi = this.loadedStudent.prodi;
    else
      tempProdi = form.value.prodi;


    const student: Student1 = 
    {
      nim:this.loadedStudent.nim,
      nama:tempNama.toString(),
      prodi:tempProdi.toString(),
    };
    this.student1Serv.editStudent(student);
    this.router.navigateByUrl('/student1');
  }

}
