import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form:FormGroup;
  errorMessage:string = '';
  successMessage:string = '';

  validation_messages = 
  {
    'email': [
      {type: 'required', message:'Email is required.'},
      {type: 'patrern', message:'Enter a valid Email.'}
    ],
    'password': [
      {type: 'required', message:'Password is required.'},
      {type: 'minlength', message:'Password must be at least 5 characters long.'}

    ]
  }

  constructor(
    private navCtrl: NavController,
    private authSrv: AuthService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group(
      {
        email:new FormControl('',Validators.compose(
          [
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ]
        )),
        password:new FormControl('',Validators.compose(
          [
            Validators.minLength(5),
            Validators.required
          ]
        )),
      }
    );
  }

  loginUser(value)
  {
    this.authSrv.loginUser(value)
      .then(res =>
        {
          console.log(res);
          this.errorMessage = '';
          this.navCtrl.navigateForward('/home');
        },
        err =>
        {
          console.log(err);
          this.errorMessage = err.message;
        });
  }

  goRegisterPage()
  {
    this.navCtrl.navigateBack('/register');
  }
}
