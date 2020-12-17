import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../week11/auth.service';
import { NavController } from '@ionic/angular';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { map } from "rxjs/operators"; 
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user:Users;
  email:string;
  namaD:string;
  namaB:string;
  users:Array<any>;
  isValid:boolean = false;
  userEmail:string;
  isLoading = false;

  constructor(
    private navCtrl:NavController,
    private authSrv:AuthService,
    private usersSrv:UsersService,
    private router: Router,
    private loadCtrl:LoadingController) { }

  ngOnInit() {
    this.usersSrv.getAll().snapshotChanges().pipe(
      map(changes=>
        changes.map(c =>({key: c.payload.key, ...c.payload.val()})))
      
    ).subscribe(
      data =>
      {
        this.users = data;
        for(var x=0;x<this.users.length;x++)
        {
          if(this.users[x].email == this.userEmail)
          {
            
            
            this.email = this.users[x].email;
            this.namaD = this.users[x].namaDepan;
            this.namaB = this.users[x].namaBelakang;
          }
          
        }
      }
    );
    
    if(this.users != null)
    {
      
      
      
      for(var x=0;x<this.users.length;x++)
      {
        
        if(this.users[x].email == this.userEmail)
        {
          
          this.email = this.users[x].email;
          this.namaD = this.users[x].namaDepan;
          this.namaB = this.users[x].namaBelakang;
        }
        
      }
      
      
    }
    else
    {
      this.present();
    }
      
    
    
    
      
    
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
        
      });

      
      
  }

  ionViewWillEnter(){
    this.ngOnInit();
   }
   
  logOut()
  {
    this.authSrv.logoutUser()
      .then(res =>
        {
          console.log(res);
          this.router.navigateByUrl('');
        }).catch(error =>
          {
            //console.log(error);
            
          })
  }

  async present() {
    this.isLoading = true;
    return await this.loadCtrl.create({
       duration: 500,
    }).then(a => {
      a.present().then(() => {
        
        this.ngOnInit();
        
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadCtrl.dismiss().then(() => console.log('dismissed'));
  }

}
