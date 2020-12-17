import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MahasiswaService } from '../mahasiswa.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  contacts:any;
  key:string;
  res:any = [];
  data: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mhsSrv: MahasiswaService,
    private db: AngularFireDatabase,
    private router:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap =>
      {
        
        if(!paramMap.has('key')){return;}
        const key = paramMap.get('key');
        this.key = key;
      })
  }

  onSubmit(form: NgForm)
  {
    console.log(form);

    

    this.mhsSrv.update(this.key, form.value).then(res =>
      {
        console.log(res);
        this.router.navigateByUrl('/index');
      }).catch(error => console.log(error));
    
      form.reset();
    this.router.navigateByUrl('/index');
  }
}
