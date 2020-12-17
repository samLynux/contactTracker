import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MahasiswaService } from '../mahasiswa.service';
import { map } from "rxjs/operators"; 
import { AuthService } from '../../week11/auth.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  contacts:any;
  isValid:boolean = false;
  userEmail:string;

  constructor(
    private mhsSrv: MahasiswaService,
    private navCtrl:NavController,
    private authSrv:AuthService,
    private router: Router) { }

  ngOnInit() { 
    this.isValid = false;
    this.authSrv.userDetails().subscribe(res =>
      {
        if(res !== null)
        {
          this.userEmail = res.email;
          this.isValid = true;
        }
        else
        {
          console.log('gagal');
          this.isValid = false;
        }
        
      },
      err => {
        console.log(err);
        
      })
    this.mhsSrv.getAll().snapshotChanges().pipe(
      map(changes=>
        changes.map(c =>({key: c.payload.key, ...c.payload.val()})))
      
    ).subscribe(
      data =>
      {
        this.contacts = data;
      }
    );
    
  }

  ionViewWillEnter(){
    this.ngOnInit();
   }

  delete(event,key)
  {
    console.log(key);
    this.mhsSrv.delete(key).then(res =>
      {
        console.log(res);
      })
  }

  logOut()
  {
    this.authSrv.logoutUser()
      .then(res =>
        {
          this.ionViewWillEnter();
        }).catch(error =>
          {
            console.log(error);
            
          })
  }
}
