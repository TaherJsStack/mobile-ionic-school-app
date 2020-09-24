import { Component, OnInit } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { LanguageService } from './providers/language.service';
import { LoginService } from './providers/login.service';
import { Network } from '@ionic-native/network/ngx';
import { TranslateService } from '@ngx-translate/core';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent  implements OnInit {

  Subscription: Subscription;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public  storage: Storage,
    private Router: Router,
    private LanguageService: LanguageService,
    private LoginService: LoginService,
    private network: Network,
    private toastController: ToastController,
    private translate: TranslateService,
    private fcm: FCM
  ) {
    this.initializeApp();
    this.translate.setDefaultLang('en');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.statusBar.styleLightContent();
      // this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#abd2ff');
      // this.statusBar.styleBlackOpaque()

// ********************************************************************



this.fcm.getToken().then(token => {
  // backend.registerToken(token);
});

this.fcm.onNotification().subscribe(data => {
  if(data.wasTapped){
    console.log("Received in background");
  } else {
    console.log("Received in foreground");
  };
});

this.fcm.onTokenRefresh().subscribe(token => {
  // backend.registerToken(token);
});

this.fcm.hasPermission().then(hasPermission => {
  if (hasPermission) {
    console.log("Has permission!");
  }
})

// this.fcm.clearAllNotifications();




// **********************************************************************





    });
  }


  ngOnInit() {
    console.log('==============================> AppComponent <======================================')

    // this.fcm.subscribeToTopic('marketing');


    this.Subscription = this.LanguageService.language.subscribe( 
      langVal => {
        // console.log('langVal =>', langVal)
        this.translate.setDefaultLang(langVal);
        this.translate.use(langVal);
      })

    this.storage.get('lang').then( langIs => {
      console.log('langIs =>eeeeeeeeeeeeeeeeeee>>>', langIs)
    });
    
    // to get a key/value pair
    this.storage.get('schoolToken').then((val) => {
      console.log('schoolToken app component =>', val);
      if (val != null) {
        this.Router.navigateByUrl('/tabs/tabs')
      }
    }); 

    this.storage.get('userData').then((userData) => {
      console.log('storage get userData =>', userData)
      if(userData) {
        // this.LoginService.getUserNotifications(userData._id)
        // .subscribe( notifiData => {
        //   console.log('notifiData =>', notifiData)
        // })
      }
    })



    // this.fcm.getToken().then(fcmToken => {
    //   console.log('fcm.getToken =>', fcmToken)
    //   this.storage.get('userData').then((userData) => {
    //     console.log('fcm.getToken userData  login =>', userData)
    //   // backend.registerToken(token);
    //     let userID;
    //     let userInfo;
    //     if (userData) {
    //       userID   = userData._id;
    //       userInfo = userData;
    //     }

    //     const userPhoneInfo = {
    //       uuid: this.device.uuid,
    //       model: this.device.model,
    //       serial: this.device.serial,
    //       version: this.device.version,
    //       cordova:  this.device.cordova,
    //       platform: this.device.platform,
    //       isVirtual: this.device.isVirtual,
    //       manufacturer: this.device.manufacturer,
    //     }
    //     const userLogedIn = {
    //       uuid:         this.device.uuid,
    //       userId:        userID,
    //       fcmToken:      fcmToken,
    //       fullUserData:  userInfo,
    //       fullPhoneInfo: userPhoneInfo,
    //     }
    //     this.LoginService.registerFCMToken(userLogedIn).subscribe( sucss => { console.log('registerFCMToken =>', sucss ) })
    //  })
    // });

    // this.fcm.onNotification().subscribe(data => {
    //   console.log('data.wasTapped', JSON.stringify(data))
    //   if(data.wasTapped){
    //     console.log(JSON.stringify(data));
    //     console.log("Received in background");
    //     this.localNotifications.schedule({
    //       id: 1,
    //       title: data.title,
    //       text: data.body,
    //       // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
    //       data: { secret: "key "}
    //     });
    //   } else {
    //     console.log("Received in foreground");
    //     console.log(JSON.stringify(data));
    //     this.localNotifications.schedule({
    //       id: 1,
    //       title: data.title,
    //       text: data.body,
    //       // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
    //       data: { secret: "key "}
    //     });
    //   };
    // });

// ***************************************************************************************

    // watch network for a disconnection
    this.network.onDisconnect().subscribe(( netInfo ) => {
      this.toastController.create({
        message: 'watch network for a disconnection',
        position: 'top',
        duration: 2000
      }).then( toast => { toast.present() }
    );
    });
    // stop disconnect watch
    // disconnectSubscription.unsubscribe();
    // watch network for a connection
    this.network.onConnect().subscribe((netInfo) => {
      this.toastController.create({
        message: 'network connection back',
        position: 'top',
        duration: 2000
      }).then( toast => { toast.present() }
    );
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');

          this.toastController.create({
            message: 'we got a wifi connection, woohoo!',
            position: 'top',
            duration: 2000
          }).then( toast => { toast.present() }
        );

        }
      }, 3000);
    });
    // stop connect watch
    // connectSubscription.unsubscribe();
  }

  logout() {}

  ngOnDestroy() {
    this.Subscription.unsubscribe()
  }





}
