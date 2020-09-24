import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/providers/login.service';
// import { LoginService } from '../ ../providers/login.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  Subscription :Subscription;
  errMessage;
  sucMeseage;

  constructor(private Router: Router,
              private toastController: ToastController,
              private LoginService: LoginService, 
              private storage: Storage ) { }

  ngOnInit() {
    console.log('==============================> LoginPage <======================================')

    this.loginForm = new FormGroup ({
      email:    new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      // email:     new FormControl(null, Validators.compose([
      //   Validators.required,
      //   Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      //   ])
    })
  
  }

  
  onCheckEmail(email){
    console.log('email =>', email)
    this.Subscription = this.LoginService.checkEmail(email)
    .subscribe( 
      isEmail => { 
        console.log('isEmail =>', isEmail)
        this.sucMeseage = isEmail.message;
        this.errMessage = ''
        
        this.toastController.create({
            message: isEmail.message,
            position: 'top',
            duration: 2000
          }).then( toast => { toast.present() }
        );
      },
      err => {
        console.log('onCheckEmail =>', err.error.message)
        this.errMessage = err.error.message;
        this.sucMeseage = ''
      })
  }


  onLogin() {

    if (this.loginForm.invalid ) {
      return;
    }
    console.log('login =>', this.loginForm.value)
    // this.Router.navigateByUrl('/tabs/tabs')
    this.loginForm.value.email;
    const loginData = {
      email:    this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    
    this.LoginService.login(loginData)
      .subscribe( logedIn => { 
        console.log(' ========> logedIn', logedIn);
              // set a key/value
        this.storage.set('userData', logedIn.userInfo).then((val) => {
          console.log('userData  login =>', val)
        })
        this.storage.set('schoolToken', logedIn.token).then((val) => {
          console.log('schoolToken login =>', val);
          if (val != null) {
            this.Router.navigateByUrl('/tabs/tabs')
            this.loginForm.reset()
          }
        }); 
      
      })
  }


  ngOnDestroy() {
    this.Subscription.unsubscribe()
  }


}
