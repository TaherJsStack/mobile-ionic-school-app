import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from './auth.service';
// import { Storage } from '@ionic/storage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   authToken;

  constructor( 
    // private authService: AuthService,
    private Router: Router,
    // public storage: Storage,

    ) {}

  intercept( req: HttpRequest<any>, next: HttpHandler  ) {
    // const authToken   = this.authService.getToken();
    // if (authToken == null) {
    //   this.Router.navigate(['/backend'])
    // } else {
    //   this.authService.isLogin.next(true)

    // }
    // to get a key/value pair
    // this.storage.get('schoolToken').then((val) => {
    //   console.log('schoolToken AuthInterceptor =>', val);
    //   this.authToken = val;
    // }); 

    // create headers data
    const headers = new HttpHeaders ( {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8", 
      'Accept': 'application/json, text/plain',
      "cache-control": "no-cache", 
      "Access-Control-Allow-Origin": "*", 
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers",
      "Access-Control-Allow-Credentials" : "true",
      "Access-Control-Allow-Methods" : "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT",  
      });

    // console.log('HttpRequest authToken=>', this.authToken);
    const authRequest = req.clone({
      // headers: req.headers.set('authorization', 'Bearer ' + this.authToken ),
      // headers: req.headers.set(headers)
      headers
    });
    console.log('authRequest =>', authRequest)
    return next.handle( authRequest );
  }
}
