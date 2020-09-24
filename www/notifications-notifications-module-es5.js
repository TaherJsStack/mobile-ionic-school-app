function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notifications/notifications.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notifications/notifications.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>notifications</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen \n[scrollEvents]=\"true\"\n(ionScrollStart)=\"logScrollStart($event)\"\n(ionScroll)=\"logScrolling($event)\"\n(ionScrollEnd)=\"logScrollEnd($event)\" >\n\n\n\n<div class=\"spinner\" *ngIf=\"spinner\">\n  <ion-spinner name=\"crescent\"></ion-spinner>\n</div>\n\n\n<ion-list *ngIf=\"!spinner\">\n  <ion-item *ngFor=\"let post of posts\" [routerLink]=\"['/tabs/tabs/notifications/notification', post.id ]\">\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/logo.png\">\n    </ion-avatar>\n    <ion-label>\n      <h3>\n        <strong>{{ post.title }}</strong>\n      </h3>\n      <p>{{ post.body }}</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n\n\n<!-- \n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Finn</h2>\n      <h3>I'm a big deal</h3>\n      <p>Listen, I've had a pretty messed up day...</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/logo.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Finn</h2>\n      <h3>I'm a big deal</h3>\n      <p>Listen, I've had a pretty messed up day...</p>\n    </ion-label>\n  </ion-item>\n\n  \n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Finn</h2>\n      <h3>I'm a big deal</h3>\n      <p>Listen, I've had a pretty messed up day...</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/logo.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Finn</h2>\n      <h3>I'm a big deal</h3>\n      <p>Listen, I've had a pretty messed up day...</p>\n    </ion-label>\n  </ion-item>\n\n  \n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Finn</h2>\n      <h3>I'm a big deal</h3>\n      <p>Listen, I've had a pretty messed up day...</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/logo.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Finn</h2>\n      <h3>I'm a big deal</h3>\n      <p>Listen, I've had a pretty messed up day...</p>\n    </ion-label>\n  </ion-item>\n\n  \n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Finn</h2>\n      <h3>I'm a big deal</h3>\n      <p>Listen, I've had a pretty messed up day...</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/logo.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Finn</h2>\n      <h3>I'm a big deal</h3>\n      <p>Listen, I've had a pretty messed up day...</p>\n    </ion-label>\n  </ion-item>\n\n  \n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Finn</h2>\n      <h3>I'm a big deal</h3>\n      <p>Listen, I've had a pretty messed up day...</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../../assets/logo.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Finn</h2>\n      <h3>I'm a big deal</h3>\n      <p>Listen, I've had a pretty messed up day...</p>\n    </ion-label>\n  </ion-item> -->\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/notifications/notifications-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/notifications/notifications-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: NotificationsPageRoutingModule */

  /***/
  function srcAppPagesNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function () {
      return NotificationsPageRoutingModule;
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


    var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/pages/notifications/notifications.page.ts");

    var routes = [{
      path: '',
      component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }, {
      path: 'notification/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | notification-notification-module */
        "notification-notification-module").then(__webpack_require__.bind(null,
        /*! ./notification/notification.module */
        "./src/app/pages/notifications/notification/notification.module.ts")).then(function (m) {
          return m.NotificationPageModule;
        });
      }
    }];

    var NotificationsPageRoutingModule = function NotificationsPageRoutingModule() {
      _classCallCheck(this, NotificationsPageRoutingModule);
    };

    NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/notifications/notifications.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/notifications/notifications.module.ts ***!
    \*************************************************************/

  /*! exports provided: NotificationsPageModule */

  /***/
  function srcAppPagesNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
      return NotificationsPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notifications-routing.module */
    "./src/app/pages/notifications/notifications-routing.module.ts");
    /* harmony import */


    var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/pages/notifications/notifications.page.ts");

    var NotificationsPageModule = function NotificationsPageModule() {
      _classCallCheck(this, NotificationsPageModule);
    };

    NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]],
      declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })], NotificationsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/notifications/notifications.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/notifications/notifications.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNotificationsNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".spinner {\n  text-align: center;\n  line-height: 36;\n}\n\nion-list {\n  width: 90%;\n  margin: auto;\n}\n\nion-list ion-item {\n  margin-bottom: 0.5rem;\n  box-shadow: 0px 12px 15px -20px;\n  border: 1px solid #b3b59f6e;\n  border-radius: 5px;\n  padding-bottom: 16px;\n}\n\nion-list ion-item h3 {\n  margin-bottom: 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhcmtzaWRlL0Rlc2t0b3Avc2Nob29sL3NjaG9vbC1hcHAvc3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFFO0VBQ0UscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0VKOztBRERJO0VBQ0UscUJBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzY7XG59XG5pb24tbGlzdHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIGlvbi1pdGVte1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDE1cHggLTIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjU5ZjZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBoM3tcbiAgICAgIG1hcmdpbi1ib3R0b206IC42cmVtO1xuICAgIH1cbiAgfVxufSIsIi5zcGlubmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzY7XG59XG5cbmlvbi1saXN0IHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDE1cHggLTIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2I1OWY2ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/notifications/notifications.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/notifications/notifications.page.ts ***!
    \***********************************************************/

  /*! exports provided: NotificationsPage */

  /***/
  function srcAppPagesNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
      return NotificationsPage;
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


    var src_app_providers_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/providers/notifications.service */
    "./src/app/providers/notifications.service.ts");

    var NotificationsPage = /*#__PURE__*/function () {
      function NotificationsPage(notificationsService) {
        _classCallCheck(this, NotificationsPage);

        this.notificationsService = notificationsService;
        this.posts = [];
        this.spinner = true;
      }

      _createClass(NotificationsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log('======================> PostsListPage <=====================');
          this.notificationsService.getPostsList().subscribe(function (postsData) {
            // console.log('postsData => ', postsData)
            _this.posts = postsData;
            _this.spinner = false;
          }, function (error) {// console.log('error => ', error)
          });
        }
      }, {
        key: "logScrollStart",
        value: function logScrollStart(event) {
          console.log('logScrollStart=>', event);
        }
      }, {
        key: "logScrolling",
        value: function logScrolling(event) {// console.log('logScrolling=>', event)
        }
      }, {
        key: "logScrollEnd",
        value: function logScrollEnd(event) {
          console.log('logScrollEnd=>', event);
        }
      }]);

      return NotificationsPage;
    }();

    NotificationsPage.ctorParameters = function () {
      return [{
        type: src_app_providers_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]
      }];
    };

    NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./notifications.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notifications/notifications.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./notifications.page.scss */
      "./src/app/pages/notifications/notifications.page.scss"))["default"]]
    })], NotificationsPage);
    /***/
  },

  /***/
  "./src/app/providers/notifications.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/providers/notifications.service.ts ***!
    \****************************************************/

  /*! exports provided: NotificationsService */

  /***/
  function srcAppProvidersNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
      return NotificationsService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var NotificationsService = /*#__PURE__*/function () {
      // lang = new BehaviorSubject<string>('en');
      // language = this.lang.asObservable();
      function NotificationsService(http) {
        _classCallCheck(this, NotificationsService);

        this.http = http;
      }

      _createClass(NotificationsService, [{
        key: "getPostsList",
        value: function getPostsList() {
          return this.http.get('https://jsonplaceholder.typicode.com/posts');
        }
      }, {
        key: "getPostById",
        value: function getPostById(id) {
          return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
        }
      }]);

      return NotificationsService;
    }();

    NotificationsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    NotificationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotificationsService);
    /***/
  }
}]);
//# sourceMappingURL=notifications-notifications-module-es5.js.map