function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"spinner\" *ngIf=\"spinner\">\n  <ion-spinner name=\"circles\"></ion-spinner>\n</ion-content>\n<ion-content *ngIf=\"!spinner\"\n[scrollEvents]=\"true\"\n(ionScrollStart)=\"logScrollStart($event)\"\n(ionScroll)=\"logScrolling($event)\"\n(ionScrollEnd)=\"logScrollEnd($event)\">\n\n  <!-- <div *ngIf=\"spinner\" style=\"background-color: black; margin: auto; width: 50px; color: black; position: fixed; top: 50px;\">\n    <ion-spinner name=\"circles\" style=\"font-size: 5rem; background-color: black; margin: auto; width: 50px; color: black;\"></ion-spinner>\n  </div>\n  <ion-spinner name=\"circles\" *ngIf=!spinner\"></ion-spinner>\n  -->\n\n    <div class=\"head\" *ngIf=\"!spinner\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            \n            <button mat-button color=\"primary\" (click)=\"onLogout()\">\n              <ion-icon name=\"power-outline\"></ion-icon>\n            </button>\n            \n            <button mat-button color=\"accent\" class=\"translate\" (click)=\"presentPopover($event)\">\n              <ion-icon name=\"language-outline\"></ion-icon>\n            </button>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div class=\"head-info\">\n        <div class=\"avatar-img\">\n          <img [src]=\"userData?.imageUrl\">\n        </div>\n        <div class=\"user-data\">\n          <h2>{{ userData?.name.firstname }} {{ userData?.name.lastname }}</h2>\n          <h5>0{{ userData?.phone }}</h5>\n        </div>\n      </div>\n    \n    </div>\n\n    <div class=\"body\" *ngIf=\"!spinner\">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button mat-button color=\"primary\">\n              <i class=\"material-icons\"> place </i>\n            </button>\n            <button mat-button style=\"position: absolute; right: 0;\">\n              {{ 'childs' | translate }} <i class=\"material-icons\"> people_alt </i> {{ userData?.childes.length }}\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-card *ngFor=\"let child of childes\" [routerLink]=\"['/tabs/tabs/childes', child._id ]\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\" *ngIf=\"child?.imageUrl\"> <img ng-show=\"assets/download.png\"  src=\"{{ child?.imageUrl }}\">  </ion-col>\n            <ion-col size=\"3\" *ngIf=\"!child?.imageUrl\"> <img src=\"assets/download.png\">  </ion-col>\n            <ion-col size=\"8\"> \n              <p class=\"studentName\" style=\"color: black; text-align: center;\"> \n                {{ child?.name.firstname }} {{ child?.name.lastname }} \n              </p> \n              <ion-label> <p>Stage</p> <span>{{ child?.educationalStage }}</span> </ion-label>\n              <ion-label> <p>level</p> <span>{{ child?.level }}</span> </ion-label>\n              <ion-label> <p>email</p> <span>{{ child?.email }}</span> </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n      <br>\n      <br>\n    \n    </div>\n\n\n \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild()],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  position: relative;\n}\nion-content button {\n  background-color: transparent !important;\n}\nion-content button ion-icon {\n  font-size: 1.5rem;\n  padding: 0.8rem;\n}\nion-content .head {\n  background-color: #D5E7FF;\n  position: relative;\n  height: 50%;\n}\nion-content .head button.translate {\n  position: absolute;\n  right: 0;\n}\nion-content .head .head-info {\n  position: relative;\n  top: 1.1rem;\n  left: 0;\n  right: 0;\n  padding-bottom: 1rem;\n}\nion-content .head .head-info .avatar-img {\n  margin: auto;\n  width: 130px;\n  height: 130px;\n  border-radius: 75px;\n  overflow: hidden;\n  border: 2px #ff000021 solid;\n  box-shadow: 0px 0px 34px -6px black;\n}\nion-content .head .head-info .avatar-img img {\n  margin: auto;\n}\nion-content .head .head-info .user-data {\n  text-align: center;\n  position: absolute;\n  color: #000;\n  left: 0;\n  right: 0;\n}\nion-content .body {\n  position: absolute;\n  background-color: #abd2ff;\n  top: 47%;\n  left: 0;\n  right: 0;\n  border-top-left-radius: 22px;\n  border-top-right-radius: 22px;\n  padding: 0px 19px;\n  box-shadow: 0px 0px 36px -18px black;\n}\nion-content .body ion-card ion-grid ion-row.row-head {\n  font-weight: bold;\n}\nion-content .body ion-card p.studentName {\n  color: black;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  font-weight: 500;\n}\nion-content .body ion-card ion-label {\n  display: block;\n}\nion-content .body ion-card ion-label p {\n  display: inline-block;\n  width: 50px;\n  text-align: left;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhcmtzaWRlL0Rlc2t0b3Avc2Nob29sL3NjaG9vbC1hcHAvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7QUNDRDtBREFDO0VBQ0Msd0NBQUE7QUNFRjtBRERFO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0FDR0g7QURDRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7QURBSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQ0VOO0FEQUU7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDRyxPQUFBO0VBQ0gsUUFBQTtFQUNBLG9CQUFBO0FDRUg7QURESTtFQUNELFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDR0g7QURGTTtFQUVFLFlBQUE7QUNHUjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUVILFdBQUE7RUFDQSxPQUFBO0VBQ0UsUUFBQTtBQ0FMO0FEU0U7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7QUNQSjtBRFdRO0VBQ0UsaUJBQUE7QUNUVjtBRFlNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1ZSO0FEYU07RUFDRSxjQUFBO0FDWFI7QURhUTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNYViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRidXR0b257XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0XHRpb24taWNvbntcblx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdFx0cGFkZGluZzogLjhyZW07XG5cdFx0fVxuXG5cdH1cbiAgLmhlYWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q1RTdGRjsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBidXR0b24udHJhbnNsYXRle1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgIHJpZ2h0OiAwO1xuXHRcdH1cblx0XHQuaGVhZC1pbmZve1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0dG9wOiAxLjFyZW07XG4gICAgICBsZWZ0OiAwO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAuYXZhdGFyLWltZ3tcblx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdHdpZHRoOiAxMzBweDtcblx0XHRcdGhlaWdodDogMTMwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA3NXB4O1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdGJvcmRlcjogMnB4ICNmZjAwMDAyMSBzb2xpZDtcblx0XHRcdGJveC1zaGFkb3c6IDBweCAwcHggMzRweCAtNnB4IGJsYWNrO1xuICAgICAgaW1ne1xuICAgICAgICAvLyB3aWR0aDogMTAwcHg7IFxuICAgICAgICBtYXJnaW46IGF1dG87IFxuICAgICAgICAvLyBoZWlnaHQ6IDEwMHB4O1xuICAgICAgfVxuXHRcdH1cbiAgICAudXNlci1kYXRhe1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAvLyB0b3A6IDEyMnB4OyBcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0bGVmdDogMDtcblx0ICAgIHJpZ2h0OiAwO1xuICAgICAgaDJ7fVxuICAgICAgaDV7fVxuICAgIH1cblxuXHRcdH1cblxuICB9XG5cbiAgLmJvZHl7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmQyZmY7XG4gICAgdG9wOiA0NyU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMnB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAxOXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzZweCAtMThweCBibGFjaztcblxuICAgIGlvbi1jYXJke1xuICAgICAgaW9uLWdyaWR7XG4gICAgICAgIGlvbi1yb3cucm93LWhlYWR7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHAuc3R1ZGVudE5hbWV7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG5cbiAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgcHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn0iLCJpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBidXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZzogMC44cmVtO1xufVxuaW9uLWNvbnRlbnQgLmhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVFN0ZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTAlO1xufVxuaW9uLWNvbnRlbnQgLmhlYWQgYnV0dG9uLnRyYW5zbGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5pb24tY29udGVudCAuaGVhZCAuaGVhZC1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEuMXJlbTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuaW9uLWNvbnRlbnQgLmhlYWQgLmhlYWQtaW5mbyAuYXZhdGFyLWltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA3NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDJweCAjZmYwMDAwMjEgc29saWQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzRweCAtNnB4IGJsYWNrO1xufVxuaW9uLWNvbnRlbnQgLmhlYWQgLmhlYWQtaW5mbyAuYXZhdGFyLWltZyBpbWcge1xuICBtYXJnaW46IGF1dG87XG59XG5pb24tY29udGVudCAuaGVhZCAuaGVhZC1pbmZvIC51c2VyLWRhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICMwMDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuaW9uLWNvbnRlbnQgLmJvZHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmQyZmY7XG4gIHRvcDogNDclO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIycHg7XG4gIHBhZGRpbmc6IDBweCAxOXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDM2cHggLTE4cHggYmxhY2s7XG59XG5pb24tY29udGVudCAuYm9keSBpb24tY2FyZCBpb24tZ3JpZCBpb24tcm93LnJvdy1oZWFkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCAuYm9keSBpb24tY2FyZCBwLnN0dWRlbnROYW1lIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1jb250ZW50IC5ib2R5IGlvbi1jYXJkIGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNvbnRlbnQgLmJvZHkgaW9uLWNhcmQgaW9uLWxhYmVsIHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_components_language_language_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/language/language.component */
    "./src/app/components/language/language.component.ts");
    /* harmony import */


    var src_app_providers_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/providers/login.service */
    "./src/app/providers/login.service.ts"); // import { LanguageComponent } from '../../language/language.component';
    // import { LoginService } from '../providers/login.service';


    var HomePage = /*#__PURE__*/function () {
      function HomePage(translate, popoverController, LoginService, storage, Router, toastController) {
        _classCallCheck(this, HomePage);

        this.translate = translate;
        this.popoverController = popoverController;
        this.LoginService = LoginService;
        this.storage = storage;
        this.Router = Router;
        this.toastController = toastController;
        this.spinner = true;
      }

      _createClass(HomePage, [{
        key: "logScrollStart",
        value: function logScrollStart(e) {// console.log('logScrollStart =>', e)
        }
      }, {
        key: "logScrolling",
        value: function logScrolling(e) {// console.log('logScrolling =>', e)
        }
      }, {
        key: "logScrollEnd",
        value: function logScrollEnd(e) {// console.log('logScrollEnd =>', e)
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log('==============================> HomePage <======================================');
          this.storage.get('userData').then(function (val) {
            if (val != null) {
              _this.userData = val;
              _this.childes = val.childes;
              _this.spinner = false;
            }

            console.log('this.this.childes =>', _this.childes);
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.translate.getBrowserLang();
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_language_language_component__WEBPACK_IMPORTED_MODULE_6__["LanguageComponent"],
                      event: ev,
                      translucent: true,
                      cssClass: 'pop-over-style'
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          var _this2 = this;

          this.LoginService.logout(); // to get a key/value pair

          this.storage.get('schoolToken').then(function (val) {
            console.log('schoolToken home =>', val);

            if (val === null) {
              _this2.Router.navigateByUrl('/');
            }
          });
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: src_app_providers_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map