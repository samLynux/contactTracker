import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userEmail:string;
  userID:string;

  constructor(
    private navCtrl: NavController,
    private authSrv: AuthService
  ) { }

  ngOnInit() {
    this.authSrv.userDetails().subscribe(res =>
      {
        console.log('res:',res);
        console.log('uid:',res.uid);
        if(res !== null)
        {
          this.userEmail = res.email;
        }
        else
        {
          this.navCtrl.navigateBack('');
        }
        
      },
      err => {
        console.log(err);
        
      })
  }

  logOut()
  {
    this.authSrv.logoutUser()
      .then(res =>
        {
          console.log(res);
          this.navCtrl.navigateBack('');
        }).catch(error =>
          {
            console.log(error);
            
          })
  }

}
