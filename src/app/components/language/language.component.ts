import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {

  Subscription: Subscription;

  constructor(private popoverController: PopoverController, public storage: Storage, private LanguageService: LanguageService) { }

  ngOnInit() {
    console.log('==============================> LanguageComponent <======================================')

    this.Subscription = this.LanguageService.language.subscribe( 
        langVal =>{ 
          // console.log('langVal =>', langVal)
        })
  }

  onChangeLang(lang: string) {
    // console.log('onChangeLang =>', lang)
    this.LanguageService.lang.next(lang);
    return this.storage.set('lang', lang).then(() => {
      this.popoverController.dismiss();
    });
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe()
  }



}
