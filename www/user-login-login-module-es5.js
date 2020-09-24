function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.page.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.page.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"logo\">\n    <img src=\"assets/logo.png\">\n  </div>\n\n  <div class=\"login-form\">\n    <form (ngSubmit)=\"onLogin()\" [formGroup]=\"loginForm\">\n      <ion-text color=\"success\" *ngIf=\"sucMeseage\" >\n        {{ sucMeseage }}\n      </ion-text>\n      <mat-error *ngIf=\"errMessage\">{{ errMessage }}</mat-error>\n      <mat-form-field>\n        <mat-label>Email</mat-label>\n        <input \n          email \n          #email \n          matInput\n          (blur)=\"onCheckEmail(email.value)\"\n          formControlName=\"email\" \n          placeholder=\"Ex. m@m.m\"> \n        <mat-error *ngIf=\"loginForm.hasError('email') && loginForm.hasError('required')\">\n          Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"loginForm.hasError('required')\"> Email is <strong>required</strong></mat-error>\n      </mat-form-field>\n      \n      <mat-form-field>\n        <mat-label>password</mat-label>\n        <input matInput\n               ngModel\n               type=\"password\"\n               formControlName=\"password\"\n               placeholder=\"1900292020\">\n      </mat-form-field>\n      <br>\n      <button mat-button color=\"primary\" type=\"submit\">Login</button>\n      <button mat-button color=\"primary\" routerLink=\"/forgot-password\">Forget Password</button>\n    </form>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/user/login/login-routing.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/user/login/login-routing.module.ts ***!
    \****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppUserLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/user/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/login/login.module.ts":
  /*!********************************************!*\
    !*** ./src/app/user/login/login.module.ts ***!
    \********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppUserLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/user/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/user/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageRoutingModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_8__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/user/login/login.page.scss":
  /*!********************************************!*\
    !*** ./src/app/user/login/login.page.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgb(207,158,152);\n  --background: linear-gradient(180deg, rgba(207,158,152,0.7906512946975666) 0%, rgba(255,189,96,1) 70%);\n}\nion-content .logo {\n  width: 40%;\n  margin: auto;\n  margin-top: 50px;\n}\nion-content .login-form {\n  width: 65%;\n  margin: auto;\n  margin-top: 20%;\n}\nion-content mat-form-field {\n  width: 100%;\n}\nion-content form button {\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhcmtzaWRlL0Rlc2t0b3Avc2Nob29sL3NjaG9vbC1hcHAvc3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLHNHQUFBO0FDQ0Y7QURBRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREFFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRUo7QURBRTtFQUNFLFdBQUE7QUNFSjtBRENJO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIwNywxNTgsMTUyKTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIwNywxNTgsMTUyLDAuNzkwNjUxMjk0Njk3NTY2NikgMCUsIHJnYmEoMjU1LDE4OSw5NiwxKSA3MCUpO1xuICAubG9nb3tcbiAgICB3aWR0aDogNDAlOyBcbiAgICBtYXJnaW46IGF1dG87IFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgLmxvZ2luLWZvcm17XG4gICAgd2lkdGg6IDY1JTsgXG4gICAgbWFyZ2luOiBhdXRvOyBcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gIH1cbiAgbWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgZm9ybXtcbiAgICBidXR0b257XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIwNywxNTgsMTUyKTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIwNywxNTgsMTUyLDAuNzkwNjUxMjk0Njk3NTY2NikgMCUsIHJnYmEoMjU1LDE4OSw5NiwxKSA3MCUpO1xufVxuaW9uLWNvbnRlbnQgLmxvZ28ge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5pb24tY29udGVudCAubG9naW4tZm9ybSB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuaW9uLWNvbnRlbnQgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IGZvcm0gYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/login/login.page.ts":
  /*!******************************************!*\
    !*** ./src/app/user/login/login.page.ts ***!
    \******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppUserLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_providers_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/providers/login.service */
    "./src/app/providers/login.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); // import { LoginService } from '../ ../providers/login.service';


    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(Router, toastController, LoginService, storage) {
        _classCallCheck(this, LoginPage);

        this.Router = Router;
        this.toastController = toastController;
        this.LoginService = LoginService;
        this.storage = storage;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('==============================> LoginPage <======================================');
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
        }
      }, {
        key: "onCheckEmail",
        value: function onCheckEmail(email) {
          var _this = this;

          console.log('email =>', email);
          this.Subscription = this.LoginService.checkEmail(email).subscribe(function (isEmail) {
            console.log('isEmail =>', isEmail);
            _this.sucMeseage = isEmail.message;
            _this.errMessage = '';

            _this.toastController.create({
              message: isEmail.message,
              position: 'top',
              duration: 2000
            }).then(function (toast) {
              toast.present();
            });
          }, function (err) {
            console.log('onCheckEmail =>', err.error.message);
            _this.errMessage = err.error.message;
            _this.sucMeseage = '';
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this2 = this;

          if (this.loginForm.invalid) {
            return;
          }

          console.log('login =>', this.loginForm.value); // this.Router.navigateByUrl('/tabs/tabs')

          this.loginForm.value.email;
          var loginData = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
          };
          this.LoginService.login(loginData).subscribe(function (logedIn) {
            console.log(' ========> logedIn', logedIn); // set a key/value

            _this2.storage.set('userData', logedIn.userInfo).then(function (val) {
              console.log('userData  login =>', val);
            });

            _this2.storage.set('schoolToken', logedIn.token).then(function (val) {
              console.log('schoolToken login =>', val);

              if (val != null) {
                _this2.Router.navigateByUrl('/tabs/tabs');

                _this2.loginForm.reset();
              }
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.Subscription.unsubscribe();
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: src_app_providers_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/user/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=user-login-login-module-es5.js.map