import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { environment } from '../../environments/environment';
// const BACKEND_API = environment.API_URL + '/login/';
const BACKEND_API = environment.API_URL + '/login/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  lang = new BehaviorSubject<string>('en');
  language = this.lang.asObservable();

  constructor(private http: HttpClient,
     public storage: Storage
     ) { }

  changeLang(lang: string){
    console.log('lang=>', lang)
    this.lang.next(lang)
  }

  checkEmail(email){
    console.log('onCheckEmail =>', email)
    return this.http.get<{ message: any }>(BACKEND_API + email + '/checkEmail' );
  }

  login(data) {
    return this.http.post<{ message: any, token: any, userInfo: any, status: number }>(BACKEND_API, data );
  }

  getStudent(id) {
    return this.http.get<{message: string, student: any}>( BACKEND_API + id + '/getStudentById');
  }

  getStudentAttend(id) {
    return this.http.get<{message: string, classAttend: any, busAttend: any, status: any}>( BACKEND_API + id + '/getStudentAttend');
  }

  registerFCMToken( data ) {
    return this.http.post<{ message: any }>(BACKEND_API + 'registerFCMToken', data );
  }

  getUserNotifications(id) {
    // userId/
    return this.http.get<{message: string, Notifications: any, status: any}>( BACKEND_API + id + '/getgetUserNotifications');
  }

  logout() {
    this.storage.remove('schoolToken');
  }

}
