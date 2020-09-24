import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  lang = new BehaviorSubject<string>('en');
  language = this.lang.asObservable();

  constructor() { }

  changeLang(lang: string){
    console.log('lang=>', lang)
    this.lang.next(lang)
  }
}
