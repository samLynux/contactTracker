import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MahasiswaService } from '../mahasiswa.service';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
  res:any = [];
  data: Observable<any>;
  coordinate: '';

  constructor(
    private mhsSrv: MahasiswaService, 
    private router:Router,
    private storage: Storage,
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storage.get('coordinate')
        .then( value => {
          if (value !== null){
            
            this.coordinate = value;
          }
        });
  }

  ionViewWillLeave(){
    this.storage.get('coordinate')
        .then( value => {
          if (value !== null){
            this.storage.remove('coordinate');
          }
        });
  }

  onSubmit(form: NgForm)
  {
    console.log(form);

    

    

    this.mhsSrv.create(form.value,this.coordinate).then(res =>
      {
        console.log(res);
      }).catch(error => console.log(error));

      form.reset();
      this.router.navigateByUrl('/home/tabs/index');

    
  }

}
