import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PopoverController } from '@ionic/angular';
// import { LanguageComponent } from '../../language/language.component';
// import { LoginService } from '../providers/login.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LanguageComponent } from 'src/app/components/language/language.component';
import { LoginService } from 'src/app/providers/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  userData;
  childes
  spinner: boolean = true;

  constructor( private translate: TranslateService, 
               private popoverController: PopoverController,
               private LoginService: LoginService,
               private storage: Storage,
               private Router: Router,
               private toastController: ToastController) {
  
  }

  logScrollStart(e) {
    // console.log('logScrollStart =>', e)
  }

  logScrolling(e) {
    // console.log('logScrolling =>', e)
  }

  logScrollEnd(e) {
    // console.log('logScrollEnd =>', e)
  }

  ngOnInit() {
    console.log('==============================> HomePage <======================================')

    this.storage.get('userData').then((val) => {
      if (val != null) {
        this.userData = val;
        this.childes = val.childes;
        this.spinner = false
      }
      console.log('this.this.childes =>', this.childes);
    });
    
  }

  ionViewDidEnter() {
    this.translate.getBrowserLang()
  }
  
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LanguageComponent,
      event: ev,
      translucent: true,
      cssClass: 'pop-over-style'
    });
    return await popover.present();
  }

  onLogout() {
    this.LoginService.logout()
    // to get a key/value pair
    this.storage.get('schoolToken').then((val) => {
      console.log('schoolToken home =>', val);
      if (val === null) {
        this.Router.navigateByUrl('/')
      }
    }); 
  }

}
