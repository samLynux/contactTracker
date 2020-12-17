import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UsersService } from 'src/app/users.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
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
    private userSrv: UsersService,
    private router: Router
    //private formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.validations_form = new FormGroup(
      {
        email:new FormControl('',Validators.compose(
          [
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ]
        )),
        namaDepan:new FormControl('',Validators.compose(
          [
            Validators.required
          ]
        )),
        namaBelakang:new FormControl('',Validators.compose(
          [
            Validators.required
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

  tryRegister(value)
  {
    
    
    this.authSrv.registerUser(value)
      .then(res =>
        {
          this.errorMessage = '';
          this.successMessage = 'Your Account has been created. Please Log In.';
        },
        err =>
        {
          console.log(err);
          this.errorMessage = err.message;
          this.successMessage = '';
        });
    this.userSrv.create(value).then(res =>
      {
      }).catch(error => console.log(error));

      
  }

  goLoginPage()
  {
    this.navCtrl.navigateBack('/login');
  }

  
}
