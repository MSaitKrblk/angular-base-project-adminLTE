(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, lint-staged, husky, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"adminlte\",\"version\":\"0.1.0\",\"scripts\":{\"start\":\"node server.js\",\"dev:start\":\"ng serve\",\"dev:build\":\"ng build --prod\",\"dev:test\":\"ng test\",\"dev:lint\":\"ng lint\",\"dev:e2e\":\"ng e2e\",\"postinstall\":\"ngcc\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~10.0.11\",\"@angular/common\":\"~10.0.11\",\"@angular/compiler\":\"~10.0.11\",\"@angular/core\":\"~10.0.11\",\"@angular/forms\":\"~10.0.11\",\"@angular/localize\":\"~10.0.11\",\"@angular/platform-browser\":\"~10.0.11\",\"@angular/platform-browser-dynamic\":\"~10.0.11\",\"@angular/router\":\"~10.0.11\",\"@ng-bootstrap/ng-bootstrap\":\"^6.1.0\",\"bootstrap\":\"^4.4.0\",\"core-js\":\"^2.5.4\",\"express\":\"^4.17.1\",\"ionicons\":\"2.0.1\",\"ngx-toastr\":\"^13.0.0\",\"rxjs\":\"~6.5.5\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.10.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1000.6\",\"@angular/cli\":\"~10.0.6\",\"@angular/compiler-cli\":\"~10.0.11\",\"@angular/language-service\":\"~10.0.11\",\"@types/jasmine\":\"~3.5.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^12.11.1\",\"admin-lte\":\"3.0.4\",\"codelyzer\":\"^6.0.0\",\"husky\":\"^4.2.5\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.2\",\"karma-jasmine\":\"~3.3.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"lint-staged\":\"^10.2.0\",\"prettier\":\"^2.0.5\",\"pretty-quick\":\"^2.0.1\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"tslint-config-prettier\":\"^1.18.0\",\"tslint-plugin-prettier\":\"^2.3.0\",\"typescript\":\"~3.9.7\"},\"lint-staged\":{\"src/**/*.{ts,tsx}\":[\"node ng-lint-staged.js dev:lint\",\"prettier --write\"]},\"husky\":{\"hooks\":{\"pre-commit\":\"pretty-quick --staged && ng lint && lint-staged\"}}}");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _views_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/blank/blank.component */ "./src/app/views/blank/blank.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/profile/profile.component */ "./src/app/views/profile/profile.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/guards/auth.guard */ "./src/app/utils/guards/auth.guard.ts");
/* harmony import */ var _utils_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/guards/non-auth.guard */ "./src/app/utils/guards/non-auth.guard.ts");












const routes = [
    {
        path: '',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        canActivate: [_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        canActivateChild: [_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [
            {
                path: 'profile',
                component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
            },
            {
                path: 'blank',
                component: _views_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"],
            },
            {
                path: '',
                component: _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            },
        ],
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        canActivate: [_utils_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_9__["NonAuthGuard"]],
    },
    {
        path: 'register',
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        canActivate: [_utils_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_9__["NonAuthGuard"]],
    },
    { path: '**', redirectTo: '' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'adminlte';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_main_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/main/header/header.component */ "./src/app/pages/main/header/header.component.ts");
/* harmony import */ var _pages_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/main/footer/footer.component */ "./src/app/pages/main/footer/footer.component.ts");
/* harmony import */ var _pages_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/main/menu-sidebar/menu-sidebar.component */ "./src/app/pages/main/menu-sidebar/menu-sidebar.component.ts");
/* harmony import */ var _views_blank_blank_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/blank/blank.component */ "./src/app/views/blank/blank.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/profile/profile.component */ "./src/app/views/profile/profile.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _pages_main_header_messages_dropdown_menu_messages_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component */ "./src/app/pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component.ts");
/* harmony import */ var _pages_main_header_notifications_dropdown_menu_notifications_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component */ "./src/app/pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_app_button_app_button_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/app-button/app-button.component */ "./src/app/components/app-button/app-button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _pages_main_header_user_dropdown_menu_user_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/main/header/user-dropdown-menu/user-dropdown-menu.component */ "./src/app/pages/main/header/user-dropdown-menu/user-dropdown-menu.component.ts");

























Object(_angular_common__WEBPACK_IMPORTED_MODULE_20__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_21___default.a, 'en-EN');
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                timeOut: 10000,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _pages_main_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _pages_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _pages_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["MenuSidebarComponent"],
        _views_blank_blank_component__WEBPACK_IMPORTED_MODULE_9__["BlankComponent"],
        _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        _pages_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
        _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
        _pages_main_header_messages_dropdown_menu_messages_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_16__["MessagesDropdownMenuComponent"],
        _pages_main_header_notifications_dropdown_menu_notifications_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_17__["NotificationsDropdownMenuComponent"],
        _components_app_button_app_button_component__WEBPACK_IMPORTED_MODULE_19__["AppButtonComponent"],
        _pages_main_header_user_dropdown_menu_user_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_22__["UserDropdownMenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _pages_main_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _pages_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _pages_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["MenuSidebarComponent"],
                    _views_blank_blank_component__WEBPACK_IMPORTED_MODULE_9__["BlankComponent"],
                    _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                    _pages_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                    _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                    _pages_main_header_messages_dropdown_menu_messages_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_16__["MessagesDropdownMenuComponent"],
                    _pages_main_header_notifications_dropdown_menu_notifications_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_17__["NotificationsDropdownMenuComponent"],
                    _components_app_button_app_button_component__WEBPACK_IMPORTED_MODULE_19__["AppButtonComponent"],
                    _pages_main_header_user_dropdown_menu_user_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_22__["UserDropdownMenuComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                        timeOut: 10000,
                        positionClass: 'toast-bottom-right',
                        preventDuplicates: true,
                    }),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/app-button/app-button.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/app-button/app-button.component.ts ***!
  \***************************************************************/
/*! exports provided: AppButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppButtonComponent", function() { return AppButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



function AppButtonComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
} }
const _c0 = function (a0) { return { "btn-block": a0 }; };
class AppButtonComponent {
    constructor() {
        this.type = 'button';
        this.block = false;
        this.color = 'primary';
        this.text = '';
        this.disabled = false;
        this.loading = false;
    }
    ngOnInit() {
        this.disabled = this.disabled || this.loading;
    }
}
AppButtonComponent.ɵfac = function AppButtonComponent_Factory(t) { return new (t || AppButtonComponent)(); };
AppButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppButtonComponent, selectors: [["app-button"]], inputs: { type: "type", block: "block", color: "color", text: "text", disabled: "disabled", loading: "loading" }, decls: 3, vars: 10, consts: [[3, "type", "ngClass", "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function AppButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppButtonComponent_span_2_Template, 1, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-", ctx.color, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.block))("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLWJ1dHRvbi9hcHAtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './app-button.component.html',
                styleUrls: ['./app-button.component.scss'],
            }]
    }], function () { return []; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], block: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _utils_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/services/app.service */ "./src/app/utils/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_app_button_app_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/app-button/app-button.component */ "./src/app/components/app-button/app-button.component.ts");








const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/forgot-password"]; };
const _c2 = function () { return ["/register"]; };
class LoginComponent {
    constructor(renderer, toastr, appService) {
        this.renderer = renderer;
        this.toastr = toastr;
        this.appService = appService;
        this.isAuthLoading = false;
    }
    ngOnInit() {
        this.renderer.addClass(document.querySelector('app-root'), 'login-page');
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    login() {
        if (this.loginForm.valid) {
            this.appService.login();
        }
        else {
            this.toastr.error('Hello world!', 'Toastr fun!');
        }
    }
    ngOnDestroy() {
        this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 44, vars: 11, consts: [[1, "login-box"], [1, "login-logo"], [3, "routerLink"], [1, "card"], [1, "card-body", "login-card-body"], [1, "login-box-msg"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], ["formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-envelope"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control"], [1, "fas", "fa-lock"], [1, "row"], [1, "col-7"], [1, "icheck-primary"], ["type", "checkbox", "id", "remember"], ["for", "remember"], [1, "col-5"], [3, "type", "block", "text", "loading"], [1, "social-auth-links", "text-center", "mb-3"], ["href", "#", 1, "btn", "btn-block", "btn-primary"], [1, "fab", "fa-facebook", "mr-2"], ["href", "#", 1, "btn", "btn-block", "btn-danger"], [1, "fab", "fa-google-plus", "mr-2"], [1, "mb-1"], [1, "mb-0"], [1, "text-center", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nutri");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ova");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign in to start your session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Remember Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "- OR -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Sign in using Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Sign in using Google+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "I forgot my password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Register a new membership");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "submit")("block", true)("text", "Sign In")("loading", ctx.isAuthLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _components_app_button_app_button_component__WEBPACK_IMPORTED_MODULE_5__["AppButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _utils_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/main/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/main/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../../../package.json */ "./package.json", 1);



class FooterComponent {
    constructor() {
        this.appVersion = _package_json__WEBPACK_IMPORTED_MODULE_1__["version"];
    }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 1, consts: [[1, "main-footer"], [1, "float-right", "d-none", "d-sm-block"], ["href", "http://adminlte.io"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Copyright \u00A9 2014-2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "AdminLTE.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " All rights reserved.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.appVersion, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/main/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/main/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/services/app.service */ "./src/app/utils/services/app.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _messages_dropdown_menu_messages_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages-dropdown-menu/messages-dropdown-menu.component */ "./src/app/pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component.ts");
/* harmony import */ var _notifications_dropdown_menu_notifications_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications-dropdown-menu/notifications-dropdown-menu.component */ "./src/app/pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component.ts");
/* harmony import */ var _user_dropdown_menu_user_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-dropdown-menu/user-dropdown-menu.component */ "./src/app/pages/main/header/user-dropdown-menu/user-dropdown-menu.component.ts");










const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/blank"]; };
class HeaderComponent {
    constructor(appService) {
        this.appService = appService;
        this.toggleMenuSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    }
    logout() {
        this.appService.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { toggleMenuSidebar: "toggleMenuSidebar" }, decls: 24, vars: 5, consts: [[1, "main-header", "navbar", "navbar-expand", "navbar-white", "navbar-light"], [1, "navbar-nav"], [1, "nav-item"], ["role", "button", 1, "nav-link", 3, "click"], [1, "fas", "fa-bars"], [1, "nav-item", "d-none", "d-sm-inline-block"], [1, "nav-link", 3, "routerLink"], [1, "form-inline", "ml-3", 3, "formGroup"], [1, "input-group", "input-group-sm"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "form-control-navbar"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-navbar"], [1, "fas", "fa-search"], [1, "navbar-nav", "ml-auto"], ["data-widget", "control-sidebar", "data-slide", "true", "href", "#", "role", "button", 1, "nav-link"], [1, "fas", "fa-th-large"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_3_listener() { return ctx.toggleMenuSidebar.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-messages-dropdown-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-notifications-dropdown-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-user-dropdown-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _messages_dropdown_menu_messages_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_5__["MessagesDropdownMenuComponent"], _notifications_dropdown_menu_notifications_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsDropdownMenuComponent"], _user_dropdown_menu_user_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_7__["UserDropdownMenuComponent"]], styles: [".fa-bars[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWJhcnMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYtaXRlbSB7XG4gIC5uYXYtbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }]; }, { toggleMenuSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MessagesDropdownMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesDropdownMenuComponent", function() { return MessagesDropdownMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const _c0 = ["dropdownMenu"];
class MessagesDropdownMenuComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    clickout(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.hideDropdownMenu();
        }
    }
    ngOnInit() { }
    toggleDropdownMenu() {
        if (this.dropdownMenu.nativeElement.classList.contains('show')) {
            this.hideDropdownMenu();
        }
        else {
            this.showDropdownMenu();
        }
    }
    showDropdownMenu() {
        this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
    }
    hideDropdownMenu() {
        this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
    }
}
MessagesDropdownMenuComponent.ɵfac = function MessagesDropdownMenuComponent_Factory(t) { return new (t || MessagesDropdownMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
MessagesDropdownMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesDropdownMenuComponent, selectors: [["app-messages-dropdown-menu"]], viewQuery: function MessagesDropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownMenu = _t.first);
    } }, hostBindings: function MessagesDropdownMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesDropdownMenuComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 51, vars: 0, consts: [[1, "nav-item", "dropdown"], ["data-toggle", "dropdown", 1, "nav-link", 3, "click"], [1, "far", "fa-comments"], [1, "badge", "badge-danger", "navbar-badge"], [1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right"], ["dropdownMenu", ""], ["href", "#", 1, "dropdown-item"], [1, "media"], ["src", "assets/img/user1-128x128.jpg", "alt", "User Avatar", 1, "img-size-50", "mr-3", "img-circle"], [1, "media-body"], [1, "dropdown-item-title"], [1, "float-right", "text-sm", "text-danger"], [1, "fas", "fa-star"], [1, "text-sm"], [1, "text-sm", "text-muted"], [1, "far", "fa-clock", "mr-1"], [1, "dropdown-divider"], ["src", "assets/img/user1-128x128.jpg", "alt", "User Avatar", 1, "img-size-50", "img-circle", "mr-3"], [1, "float-right", "text-sm", "text-muted"], [1, "float-right", "text-sm", "text-warning"], ["href", "#", 1, "dropdown-item", "dropdown-footer"]], template: function MessagesDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesDropdownMenuComponent_Template_a_click_1_listener() { return ctx.toggleDropdownMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Brad Diesel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Call me whenever you can...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " 4 Hours Ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " John Pierce ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "I got your message bro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 4 Hours Ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Nora Silvester ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "The subject goes here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 4 Hours Ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "See All Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".dropdown[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9oZWFkZXIvbWVzc2FnZXMtZHJvcGRvd24tbWVudS9tZXNzYWdlcy1kcm9wZG93bi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi9oZWFkZXIvbWVzc2FnZXMtZHJvcGRvd24tbWVudS9tZXNzYWdlcy1kcm9wZG93bi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duIHtcbiAgLm5hdi1saW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesDropdownMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages-dropdown-menu',
                templateUrl: './messages-dropdown-menu.component.html',
                styleUrls: ['./messages-dropdown-menu.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { dropdownMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dropdownMenu', { static: false }]
        }], clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: NotificationsDropdownMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsDropdownMenuComponent", function() { return NotificationsDropdownMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const _c0 = ["dropdownMenu"];
function NotificationsDropdownMenuComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 4 new messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "3 mins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 7);
} }
class NotificationsDropdownMenuComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    clickout(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.hideDropdownMenu();
        }
    }
    ngOnInit() { }
    toggleDropdownMenu() {
        if (this.dropdownMenu.nativeElement.classList.contains('show')) {
            this.hideDropdownMenu();
        }
        else {
            this.showDropdownMenu();
        }
    }
    showDropdownMenu() {
        this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
    }
    hideDropdownMenu() {
        this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
    }
}
NotificationsDropdownMenuComponent.ɵfac = function NotificationsDropdownMenuComponent_Factory(t) { return new (t || NotificationsDropdownMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NotificationsDropdownMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsDropdownMenuComponent, selectors: [["app-notifications-dropdown-menu"]], viewQuery: function NotificationsDropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownMenu = _t.first);
    } }, hostBindings: function NotificationsDropdownMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsDropdownMenuComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 32, vars: 0, consts: [[1, "nav-item", "dropdown"], ["data-toggle", "dropdown", 1, "nav-link", 3, "click"], [1, "far", "fa-bell"], [1, "badge", "badge-warning", "navbar-badge"], [1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right"], ["dropdownMenu", ""], [1, "dropdown-item", "dropdown-header"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item"], [1, "fas", "fa-envelope", "mr-2"], [1, "float-right", "text-muted", "text-sm"], [1, "fas", "fa-users", "mr-2"], [1, "fas", "fa-file", "mr-2"], ["href", "#", 1, "dropdown-item", "dropdown-footer"], ["notification", ""]], template: function NotificationsDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsDropdownMenuComponent_Template_a_click_1_listener() { return ctx.toggleDropdownMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "15 Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 4 new messages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3 mins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 8 friend requests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "12 hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 3 new reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "See All Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NotificationsDropdownMenuComponent_ng_template_30_Template, 6, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, styles: [".dropdown[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9oZWFkZXIvbm90aWZpY2F0aW9ucy1kcm9wZG93bi1tZW51L25vdGlmaWNhdGlvbnMtZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vaGVhZGVyL25vdGlmaWNhdGlvbnMtZHJvcGRvd24tbWVudS9ub3RpZmljYXRpb25zLWRyb3Bkb3duLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xuICAubmF2LWxpbmsge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsDropdownMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notifications-dropdown-menu',
                templateUrl: './notifications-dropdown-menu.component.html',
                styleUrls: ['./notifications-dropdown-menu.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { dropdownMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dropdownMenu', { static: false }]
        }], clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/main/header/user-dropdown-menu/user-dropdown-menu.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/main/header/user-dropdown-menu/user-dropdown-menu.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserDropdownMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDropdownMenuComponent", function() { return UserDropdownMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/services/app.service */ "./src/app/utils/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const _c0 = ["dropdownMenu"];
const _c1 = function () { return ["/profile"]; };
class UserDropdownMenuComponent {
    constructor(elementRef, renderer, appService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.appService = appService;
    }
    clickout(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.hideDropdownMenu();
        }
    }
    ngOnInit() {
        this.user = this.appService.user;
    }
    toggleDropdownMenu() {
        if (this.dropdownMenu.nativeElement.classList.contains('show')) {
            this.hideDropdownMenu();
        }
        else {
            this.showDropdownMenu();
        }
    }
    showDropdownMenu() {
        this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
    }
    hideDropdownMenu() {
        this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
    }
    logout() {
        this.appService.logout();
    }
}
UserDropdownMenuComponent.ɵfac = function UserDropdownMenuComponent_Factory(t) { return new (t || UserDropdownMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
UserDropdownMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDropdownMenuComponent, selectors: [["app-user-dropdown-menu"]], viewQuery: function UserDropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownMenu = _t.first);
    } }, hostBindings: function UserDropdownMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDropdownMenuComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 27, vars: 4, consts: [[1, "nav-item", "dropdown", "user-menu"], ["data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle", 3, "click"], ["alt", "User Image", 1, "user-image", "img-circle", "elevation-2", 3, "src"], [1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right"], ["dropdownMenu", ""], [1, "user-header", "bg-primary"], ["alt", "User Image", 1, "img-circle", "elevation-2", 3, "src"], [1, "user-body"], [1, "row"], [1, "col-4", "text-center"], ["href", "#"], [1, "user-footer"], [1, "btn", "btn-default", "btn-flat", 3, "routerLink"], [1, "btn", "btn-default", "btn-flat", "float-right", 3, "click"]], template: function UserDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDropdownMenuComponent_Template_a_click_1_listener() { return ctx.toggleDropdownMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Alexander Pierce - Web Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Member since Nov. 2012");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDropdownMenuComponent_Template_a_click_25_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".user-menu[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  padding: 0;\n  width: 280px;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%], .user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-body[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > li.user-header[_ngcontent-%COMP%] {\n  height: 175px;\n  padding: 10px;\n  text-align: center;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > li.user-header[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  z-index: 5;\n  height: 90px;\n  width: 90px;\n  border: 3px solid;\n  border-color: transparent;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > li.user-header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  z-index: 5;\n  font-size: 17px;\n  margin-top: 10px;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > li.user-header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-body[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #495057;\n  border-top: 1px solid #dee2e6;\n  padding: 15px;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-body[_ngcontent-%COMP%]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n@media (min-width: 576px) {\n  .user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background: #ffffff !important;\n    color: #495057 !important;\n  }\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-footer[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  padding: 10px;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-footer[_ngcontent-%COMP%]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-footer[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n@media (min-width: 576px) {\n  .user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-footer[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n    background-color: #f8f9fa;\n  }\n}\n\n.user-menu[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  float: left;\n  height: 2.1rem;\n  margin-right: 10px;\n  margin-top: -2px;\n  width: 2.1rem;\n}\n\n@media (min-width: 576px) {\n  .user-menu[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n    float: none;\n    line-height: 10px;\n    margin-right: 0.4rem;\n    margin-top: -8px;\n  }\n}\n\n.user-menu[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  height: 1.6rem;\n  width: 1.6rem;\n  margin-right: 0;\n  margin-left: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9oZWFkZXIvdXNlci1kcm9wZG93bi1tZW51L3VzZXItZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBOztFQUVFLCtCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSx5QkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSx5QkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi9oZWFkZXIvdXNlci1kcm9wZG93bi1tZW51L3VzZXItZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLW1lbnUgPiAubmF2LWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VyLW1lbnUgPiAubmF2LWxpbms6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG4udXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDI4MHB4O1xufVxuXG4udXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUsXG4udXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiAudXNlci1ib2R5IHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xufVxuXG4udXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaS51c2VyLWhlYWRlciB7XG4gIGhlaWdodDogMTc1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkudXNlci1oZWFkZXIgPiBpbWcge1xuICB6LWluZGV4OiA1O1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXI6IDNweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi51c2VyLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpLnVzZXItaGVhZGVyID4gcCB7XG4gIHotaW5kZXg6IDU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkudXNlci1oZWFkZXIgPiBwID4gc21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiAudXNlci1ib2R5IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0OTUwNTc7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4udXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiAudXNlci1ib2R5OjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogJyc7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAudXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiAudXNlci1ib2R5IGEge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xuICB9XG59XG5cbi51c2VyLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IC51c2VyLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi51c2VyLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IC51c2VyLWZvb3Rlcjo6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6ICcnO1xufVxuXG4udXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiAudXNlci1mb290ZXIgLmJ0bi1kZWZhdWx0IHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAudXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiAudXNlci1mb290ZXIgLmJ0bi1kZWZhdWx0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICB9XG59XG5cbi51c2VyLW1lbnUgLnVzZXItaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDIuMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICB3aWR0aDogMi4xcmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnVzZXItbWVudSAudXNlci1pbWFnZSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgfVxufVxuXG4udXNlci1tZW51IC51c2VyLWltYWdlIHtcbiAgaGVpZ2h0OiAxLjZyZW07XG4gIHdpZHRoOiAxLjZyZW07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDropdownMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-dropdown-menu',
                templateUrl: './user-dropdown-menu.component.html',
                styleUrls: ['./user-dropdown-menu.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, { dropdownMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dropdownMenu', { static: false }]
        }], clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/pages/main/header/header.component.ts");
/* harmony import */ var _menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-sidebar/menu-sidebar.component */ "./src/app/pages/main/menu-sidebar/menu-sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/pages/main/footer/footer.component.ts");






const _c0 = ["contentWrapper"];
class MainComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.sidebarMenuOpened = true;
    }
    ngOnInit() {
        this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
        this.renderer.removeClass(document.querySelector('app-root'), 'register-page');
    }
    mainSidebarHeight(height) {
        // this.renderer.setStyle(
        //   this.contentWrapper.nativeElement,
        //   'min-height',
        //   height - 114 + 'px'
        // );
    }
    toggleMenuSidebar() {
        if (this.sidebarMenuOpened) {
            this.renderer.removeClass(document.querySelector('app-root'), 'sidebar-open');
            this.renderer.addClass(document.querySelector('app-root'), 'sidebar-collapse');
            this.sidebarMenuOpened = false;
        }
        else {
            this.renderer.removeClass(document.querySelector('app-root'), 'sidebar-collapse');
            this.renderer.addClass(document.querySelector('app-root'), 'sidebar-open');
            this.sidebarMenuOpened = true;
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentWrapper = _t.first);
    } }, decls: 9, vars: 0, consts: [[1, "wrapper"], [3, "toggleMenuSidebar"], [3, "mainSidebarHeight"], [1, "content-wrapper"], ["contentWrapper", ""], [1, "control-sidebar", "control-sidebar-dark"], ["id", "sidebar-overlay", 3, "click"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleMenuSidebar", function MainComponent_Template_app_header_toggleMenuSidebar_1_listener() { return ctx.toggleMenuSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-menu-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mainSidebarHeight", function MainComponent_Template_app_menu_sidebar_mainSidebarHeight_2_listener($event) { return ctx.mainSidebarHeight($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aside", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_div_click_8_listener() { return ctx.toggleMenuSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["MenuSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  min-width: 100vw;\n  min-height: 100vh;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 114px);\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDExNHB4KTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { contentWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['contentWrapper', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/main/menu-sidebar/menu-sidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/main/menu-sidebar/menu-sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: MenuSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSidebarComponent", function() { return MenuSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/services/app.service */ "./src/app/utils/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const _c0 = ["mainSidebar"];
const _c1 = function () { return ["/"]; };
const _c2 = function () { return ["/profile"]; };
const _c3 = function () { return ["/blank"]; };
class MenuSidebarComponent {
    constructor(appService) {
        this.appService = appService;
        this.mainSidebarHeight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
    }
}
MenuSidebarComponent.ɵfac = function MenuSidebarComponent_Factory(t) { return new (t || MenuSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
MenuSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuSidebarComponent, selectors: [["app-menu-sidebar"]], viewQuery: function MenuSidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainSidebar = _t.first);
    } }, outputs: { mainSidebarHeight: "mainSidebarHeight" }, decls: 25, vars: 8, consts: [[1, "main-sidebar", "sidebar-dark-primary", "elevation-4"], ["mainSidebar", ""], [1, "brand-link", 3, "routerLink"], ["src", "assets/img/AdminLTELogo.png", "alt", "AdminLTE Logo", 1, "brand-image", "img-circle", "elevation-3", 2, "opacity", "0.8"], [1, "brand-text", "font-weight-light"], [1, "sidebar"], [1, "user-panel", "mt-3", "pb-3", "mb-3", "d-flex"], [1, "image"], ["src", "assets/img/user2-160x160.jpg", "alt", "User Image", 1, "img-circle", "elevation-2"], [1, "info"], [1, "d-block", 3, "routerLink"], [1, "mt-2"], ["data-widget", "treeview", "role", "menu", "data-accordion", "false", 1, "nav", "nav-pills", "nav-sidebar", "flex-column"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-icon", "fas", "fa-tachometer-alt"]], template: function MenuSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AdminLTE 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Alexander Pierce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Blank ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".main-sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9tZW51LXNpZGViYXIvbWVudS1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluL21lbnUtc2lkZWJhci9tZW51LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zaWRlYmFyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-sidebar',
                templateUrl: './menu-sidebar.component.html',
                styleUrls: ['./menu-sidebar.component.scss'],
            }]
    }], function () { return [{ type: src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, { mainSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mainSidebar', { static: false }]
        }], mainSidebarHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/services/app.service */ "./src/app/utils/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/login"]; };
class RegisterComponent {
    constructor(renderer, toastr, appService) {
        this.renderer = renderer;
        this.toastr = toastr;
        this.appService = appService;
    }
    ngOnInit() {
        this.renderer.addClass(document.querySelector('app-root'), 'register-page');
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            retypePassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    register() {
        if (this.registerForm.valid) {
            this.appService.register();
        }
        else {
            this.toastr.error('Hello world!', 'Toastr fun!');
        }
    }
    ngOnDestroy() {
        this.renderer.removeClass(document.querySelector('app-root'), 'register-page');
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 53, vars: 5, consts: [[1, "register-box"], [1, "register-logo"], [3, "routerLink"], [1, "card"], [1, "card-body", "register-card-body"], [1, "login-box-msg"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], ["formControlName", "fullName", "type", "text", "placeholder", "Full name", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-user"], ["formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control"], [1, "fas", "fa-envelope"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control"], [1, "fas", "fa-lock"], ["formControlName", "retypePassword", "type", "password", "placeholder", "Retype password", 1, "form-control"], [1, "row"], [1, "col-7"], [1, "icheck-primary"], ["type", "checkbox", "id", "agreeTerms", "name", "terms", "value", "agree"], ["for", "agreeTerms"], ["href", "#"], [1, "col-5"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "social-auth-links", "text-center"], ["href", "#", 1, "btn", "btn-block", "btn-primary"], [1, "fab", "fa-facebook", "mr-2"], ["href", "#", 1, "btn", "btn-block", "btn-danger"], [1, "fab", "fa-google-plus", "mr-2"], [1, "text-center", 3, "routerLink"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Register a new membership");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_10_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " I agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "- OR -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Sign up using Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Sign up using Google+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "I already have a membership");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utils/guards/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/utils/guards/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class AuthGuard {
    canActivate(next, state) {
        return true;
    }
    canActivateChild(next, state) {
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/utils/guards/non-auth.guard.ts":
/*!************************************************!*\
  !*** ./src/app/utils/guards/non-auth.guard.ts ***!
  \************************************************/
/*! exports provided: NonAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonAuthGuard", function() { return NonAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class NonAuthGuard {
    canActivate(next, state) {
        return true;
    }
    canActivateChild(next, state) {
        return true;
    }
    canLoad(route, segments) {
        return true;
    }
}
NonAuthGuard.ɵfac = function NonAuthGuard_Factory(t) { return new (t || NonAuthGuard)(); };
NonAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NonAuthGuard, factory: NonAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/utils/services/app.service.ts":
/*!***********************************************!*\
  !*** ./src/app/utils/services/app.service.ts ***!
  \***********************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



class AppService {
    constructor(router) {
        this.router = router;
        this.user = {
            firstName: 'Alexander',
            lastName: 'Pierce',
            image: 'assets/img/user2-160x160.jpg',
        };
    }
    login() {
        localStorage.setItem('token', 'LOGGED_IN');
        this.router.navigate(['/']);
    }
    register() {
        localStorage.setItem('token', 'LOGGED_IN');
        this.router.navigate(['/']);
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/blank/blank.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/blank/blank.component.ts ***!
  \************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class BlankComponent {
    constructor() { }
    ngOnInit() { }
}
BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(); };
BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["app-blank"]], decls: 28, vars: 0, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["type", "button", "data-widget", "collapse", "data-toggle", "tooltip", "title", "Collapse", 1, "btn", "btn-tool"], [1, "fa", "fa-minus"], ["type", "button", "data-widget", "remove", "data-toggle", "tooltip", "title", "Remove", 1, "btn", "btn-tool"], [1, "fa", "fa-times"], [1, "card-body"], [1, "card-footer"]], template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Blank Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Blank Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Start creating your amazing application! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Footer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2JsYW5rL2JsYW5rLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank',
                templateUrl: './blank.component.html',
                styleUrls: ['./blank.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class DashboardComponent {
    constructor() { }
    ngOnInit() { }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 68, vars: 0, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "m-0", "text-dark"], [2, "color", "blue"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "row"], [1, "col-lg-3", "col-6"], [1, "small-box", "bg-info"], [1, "inner"], [1, "icon"], [1, "ion", "ion-bag"], ["href", "#", 1, "small-box-footer"], [1, "fas", "fa-arrow-circle-right"], [1, "small-box", "bg-success"], [2, "font-size", "20px"], [1, "ion", "ion-stats-bars"], [1, "small-box", "bg-warning"], [1, "ion", "ion-person-add"], [1, "small-box", "bg-danger"], [1, "ion", "ion-pie-graph"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Uloo Sait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dashboard v1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "150");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "New Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "More info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "53");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "sup", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Bounce Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "More info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "44");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "User Registrations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "More info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Unique Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "More info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/services/app.service */ "./src/app/utils/services/app.service.ts");



class ProfileComponent {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() { }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 234, vars: 0, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "row"], [1, "col-md-3"], [1, "card", "card-primary", "card-outline"], [1, "card-body", "box-profile"], [1, "text-center"], ["src", "assets/img/user4-128x128.jpg", "alt", "User profile picture", 1, "profile-user-img", "img-fluid", "img-circle"], [1, "profile-username", "text-center"], [1, "text-muted", "text-center"], [1, "list-group", "list-group-unbordered", "mb-3"], [1, "list-group-item"], [1, "float-right"], ["href", "#", 1, "btn", "btn-primary", "btn-block"], [1, "card", "card-primary"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "fas", "fa-book", "mr-1"], [1, "text-muted"], [1, "fas", "fa-map-marker-alt", "mr-1"], [1, "fas", "fa-pencil-alt", "mr-1"], [1, "tag", "tag-danger"], [1, "tag", "tag-success"], [1, "tag", "tag-info"], [1, "tag", "tag-warning"], [1, "tag", "tag-primary"], [1, "far", "fa-file-alt", "mr-1"], [1, "col-md-9"], [1, "card"], [1, "card-header", "p-2"], [1, "nav", "nav-pills"], [1, "nav-item"], ["href", "#activity", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#timeline", "data-toggle", "tab", 1, "nav-link"], ["href", "#settings", "data-toggle", "tab", 1, "nav-link"], [1, "tab-content"], ["id", "activity", 1, "active", "tab-pane"], [1, "post"], [1, "user-block"], ["src", "assets/img/user1-128x128.jpg", "alt", "user image", 1, "img-circle", "img-bordered-sm"], [1, "username"], ["href", "#", 1, "float-right", "btn-tool"], [1, "fas", "fa-times"], [1, "description"], ["href", "#", 1, "link-black", "text-sm", "mr-2"], [1, "fas", "fa-share", "mr-1"], ["href", "#", 1, "link-black", "text-sm"], [1, "far", "fa-thumbs-up", "mr-1"], [1, "far", "fa-comments", "mr-1"], ["type", "text", "placeholder", "Type a comment", 1, "form-control", "form-control-sm"], [1, "post", "clearfix"], ["src", "assets/img/user7-128x128.jpg", "alt", "User Image", 1, "img-circle", "img-bordered-sm"], ["src", "assets/img/user6-128x128.jpg", "alt", "User Image", 1, "img-circle", "img-bordered-sm"], [1, "row", "mb-3"], ["src", "assets/img/photo1.png", "alt", "Photo", 1, "img-fluid"], ["src", "assets/img/photo2.png", "alt", "Photo", 1, "img-fluid", "mb-3"], ["src", "assets/img/photo3.jpg", "alt", "Photo", 1, "img-fluid"], ["src", "assets/img/photo4.jpg", "alt", "Photo", 1, "img-fluid", "mb-3"], ["id", "timeline", 1, "tab-pane"], [1, "timeline", "timeline-inverse"], [1, "time-label"], [1, "bg-danger"], [1, "fas", "fa-envelope", "bg-primary"], [1, "timeline-item"], [1, "time"], [1, "far", "fa-clock"], [1, "timeline-header"], [1, "timeline-body"], [1, "timeline-footer"], ["href", "#", 1, "btn", "btn-primary", "btn-sm"], ["href", "#", 1, "btn", "btn-danger", "btn-sm"], [1, "fas", "fa-user", "bg-info"], [1, "timeline-header", "border-0"], [1, "fas", "fa-comments", "bg-warning"], ["href", "#", 1, "btn", "btn-warning", "btn-flat", "btn-sm"], [1, "bg-success"], [1, "fas", "fa-camera", "bg-purple"], ["src", "http://placehold.it/150x100", "alt", "..."], [1, "far", "fa-clock", "bg-gray"], ["id", "settings", 1, "tab-pane"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Nina Mcintire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1,322");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "543");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "13,287");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " B.S. in Computer Science from the University of Tennessee at Knoxville ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Malibu, California");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "UI Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Coding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Jonathan Burke Jr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Shared publicly - 7:30 PM today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Comments (5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Sarah Ross");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Sent you a message - 3 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Adam Jones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Posted 5 photos - 5 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Comments (5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " 10 Feb. 2014 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " 12:05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h3", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Support Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " sent you an email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " 5 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h3", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Sarah Young");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " accepted your friend request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " 27 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h3", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Jay White");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " commented on your post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "View comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " 3 Jan. 2014 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " 2 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h3", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Mina Lee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " uploaded new photos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss'],
            }]
    }], function () { return [{ type: src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/commodore64/Desktop/Nutriova/FrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map