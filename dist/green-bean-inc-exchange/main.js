(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_handlers/error.handler.ts":
/*!********************************************!*\
  !*** ./src/app/_handlers/error.handler.ts ***!
  \********************************************/
/*! exports provided: ErrorHandler, ErrorNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorNotification", function() { return ErrorNotification; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorHandler = /** @class */ (function () {
    /**
     * This will parse json repsponses from the api and attempt to return a user friendly error.
     */
    function ErrorHandler() {
    }
    ErrorHandler.prototype.getFriendlyError = function (error) {
        var currentError;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            currentError = new ErrorNotification(error.status, error.statusText);
        }
        else if (error && error.data) {
            var response = (error.data[0] && error.data[0].response) || (error.data.response);
            currentError = new ErrorNotification(response.statusCode, response.statusText);
        }
        else {
            currentError = new ErrorNotification(500, 'Oh no, something went wrong! Please refresh or try again.');
        }
        return currentError;
    };
    ErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ErrorHandler);
    return ErrorHandler;
}());

var ErrorNotification = /** @class */ (function () {
    function ErrorNotification(statusCode, statusText, critical) {
        if (critical === void 0) { critical = false; }
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.critical = critical;
        this.message = 'Oh no, something went wrong! Please refresh or try again.';
        switch (statusCode) {
            case 400:
                this.message = 'Oh no! We had trouble saving your data. Please try again.';
                break;
            case 401:
                this.message = 'You don\'t have access to this. Please login or register.';
                break;
            case 500:
                this.message = 'Oh no, something went wrong! Please refresh or try again.';
                break;
            case 403:
            case 503:
            case 0:
                this.message = 'Oh no! Our service is temporarily unavailable. Please try again later.';
                this.critical = true;
                break;
            default:
                break;
        }
    }
    return ErrorNotification;
}());



/***/ }),

/***/ "./src/app/_services/chart.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/chart.service.ts ***!
  \********************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _handlers_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_handlers/error.handler */ "./src/app/_handlers/error.handler.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChartService = /** @class */ (function () {
    function ChartService(http, errorHandler) {
        this.http = http;
        this.errorHandler = errorHandler;
    }
    /**
     * Gets mock historicals for candle and volume charts.
     */
    ChartService.prototype.getHistoricalProductData = function () {
        return this.http.get('/_mocks/historical-product-ohlcv.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    /**
     * Handles service errors
     * @param {Response | any} error The service's response error
     */
    ChartService.prototype.handleError = function (error, rejectPromise) {
        var errNotification = this.errorHandler.getFriendlyError(error);
        console.error(errNotification);
        if (!rejectPromise)
            return Promise.reject(errNotification.message);
        else
            return Promise.resolve(errNotification);
    };
    ChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _handlers_error_handler__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"]])
    ], ChartService);
    return ChartService;
}());



/***/ }),

/***/ "./src/app/_services/fill.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/fill.service.ts ***!
  \*******************************************/
/*! exports provided: FillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillService", function() { return FillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _handlers_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_handlers/error.handler */ "./src/app/_handlers/error.handler.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FillService = /** @class */ (function () {
    function FillService(http, errorHandler) {
        this.http = http;
        this.errorHandler = errorHandler;
    }
    /**
     * Gets mock historical buy book data.
     */
    FillService.prototype.getHistoricalOrderData = function () {
        return this.http.get('/_mocks/filled-orders.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    /**
     * Handles service errors
     * @param {Response | any} error The service's response error
     */
    FillService.prototype.handleError = function (error, rejectPromise) {
        var errNotification = this.errorHandler.getFriendlyError(error);
        console.error(errNotification);
        if (!rejectPromise)
            return Promise.reject(errNotification.message);
        else
            return Promise.resolve(errNotification);
    };
    FillService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _handlers_error_handler__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"]])
    ], FillService);
    return FillService;
}());



/***/ }),

/***/ "./src/app/_services/order-book.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/order-book.service.ts ***!
  \*************************************************/
/*! exports provided: OrderBookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBookService", function() { return OrderBookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _handlers_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_handlers/error.handler */ "./src/app/_handlers/error.handler.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderBookService = /** @class */ (function () {
    function OrderBookService(http, errorHandler) {
        this.http = http;
        this.errorHandler = errorHandler;
    }
    /**
     * Gets mock historical sell book data.
     */
    OrderBookService.prototype.getHistoricalSellBookData = function () {
        return this.http.get('/_mocks/sell-book.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var _resp = res.json();
            return _resp.reverse();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    /**
     * Gets mock historical buy book data.
     */
    OrderBookService.prototype.getHistoricalBuyBookData = function () {
        return this.http.get('/_mocks/buy-book.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    /**
     * Handles service errors
     * @param {Response | any} error The service's response error
     */
    OrderBookService.prototype.handleError = function (error, rejectPromise) {
        var errNotification = this.errorHandler.getFriendlyError(error);
        console.error(errNotification);
        if (!rejectPromise)
            return Promise.reject(errNotification.message);
        else
            return Promise.resolve(errNotification);
    };
    OrderBookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _handlers_error_handler__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"]])
    ], OrderBookService);
    return OrderBookService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    } // ,
    // {
    // 	path      : '**',
    // 	component : PageNotFoundComponent
    // }   
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"mat-typography\">\r\n\t<h1>Green Bean Inc. Coffee DEX Market</h1>\r\n</header>\r\n\r\n<main id=\"main\">\r\n\t<div class=\"container container--center mat-typography\">\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header.mat-typography {\n  padding: 0.75rem 0.9rem 0;\n  background-color: #1d2b35; }\n  header.mat-typography img {\n    float: left;\n    height: 50px;\n    margin: 0 1.5rem 0 0.75rem;\n    padding: 5px 0; }\n  header.mat-typography h1 {\n    padding: 1rem;\n    color: #fff;\n    font-size: 1.2rem;\n    margin-bottom: 0.5rem; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import Material Modules used across the application.

var materialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"]
];
var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: materialModules.slice(),
            exports: materialModules.slice()
        }),
        __metadata("design:paramtypes", [])
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: highChartsModules, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highChartsModules", function() { return highChartsModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _smartcontract_smart_contract_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./smartcontract/smart-contract-modal.component */ "./src/app/smartcontract/smart-contract-modal.component.ts");
/* harmony import */ var _personal_details_personal_details_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personal-details/personal-details-modal.component */ "./src/app/personal-details/personal-details-modal.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_chart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/chart.service */ "./src/app/_services/chart.service.ts");
/* harmony import */ var _services_order_book_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/order-book.service */ "./src/app/_services/order-book.service.ts");
/* harmony import */ var _services_fill_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/fill.service */ "./src/app/_services/fill.service.ts");
/* harmony import */ var _handlers_error_handler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_handlers/error.handler */ "./src/app/_handlers/error.handler.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! highcharts/modules/stock.src */ "./node_modules/highcharts/modules/stock.src.js");
/* harmony import */ var highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highcharts/modules/exporting.src */ "./node_modules/highcharts/modules/exporting.src.js");
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_17__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Flex

// Material imports


// Local imports




// Charting imports



function highChartsModules() {
    return [highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_16___default.a, highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_17___default.a];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _smartcontract_smart_contract_modal_component__WEBPACK_IMPORTED_MODULE_6__["SmartContractComponent"],
                _personal_details_personal_details_modal_component__WEBPACK_IMPORTED_MODULE_7__["PersonalDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_15__["ChartModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_9__["AppMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
            ],
            providers: [
                _services_chart_service__WEBPACK_IMPORTED_MODULE_11__["ChartService"],
                _services_order_book_service__WEBPACK_IMPORTED_MODULE_12__["OrderBookService"],
                _services_fill_service__WEBPACK_IMPORTED_MODULE_13__["FillService"],
                _handlers_error_handler__WEBPACK_IMPORTED_MODULE_14__["ErrorHandler"],
                { provide: angular_highcharts__WEBPACK_IMPORTED_MODULE_15__["HIGHCHARTS_MODULES"], useFactory: highChartsModules }
            ],
            entryComponents: [
                _smartcontract_smart_contract_modal_component__WEBPACK_IMPORTED_MODULE_6__["SmartContractComponent"],
                _personal_details_personal_details_modal_component__WEBPACK_IMPORTED_MODULE_7__["PersonalDetailsComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\r\n\t<section fxFlex=\"25\" class=\"orders\">\r\n\t\t<h2>Order Book</h2>\r\n\t\t<div fxLayout=\"column\">\r\n\t\t\t<div class=\"sell-row\">\r\n\t\t\t\t<header fxLayout=\"row\">\r\n\t\t\t\t\t<div fxFlex=\"50\">Price (USD)</div>\r\n\t\t\t\t\t<div fxFlex=\"50\">Current Total Volume</div>\r\n\t\t\t\t</header>\r\n\t\t\t\t<mat-list>\r\n\t\t\t\t\t<mat-list-item *ngFor=\"let data of sellBookData\">\r\n\t\t\t\t\t\t<div fxFlex=\"50\">{{ data.price }}</div>\r\n\t\t\t\t\t\t<div fxFlex=\"56\">{{ data.volume }}</div>\r\n\t\t\t\t\t</mat-list-item>\r\n\t\t\t\t</mat-list>\r\n\t\t\t</div>\r\n\t\t\t<div fxLayout=\"row\" class=\"spread\">\r\n\t\t\t\t<div fxFlex=\"65\"></div>\r\n\t\t\t\t<div fxFlex=\"35\">Price (USD) Spread: <span *ngIf=\"buyBookData && sellBookData\">{{ buyBookData[0].price - sellBookData[0].price | number:'0.1-5' }}</span></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"buy-row\">\r\n\t\t\t\t<header fxLayout=\"row\">\r\n\t\t\t\t\t<div fxFlex=\"50\">Price (USD)</div>\r\n\t\t\t\t\t<div fxFlex=\"50\">Volume</div>\r\n\t\t\t\t</header>\r\n\t\t\t\t<mat-list>\r\n\t\t\t\t\t<mat-list-item *ngFor=\"let data of buyBookData\">\r\n\t\t\t\t\t\t<div fxFlex=\"50\">{{ data.price }}</div>\r\n\t\t\t\t\t\t<div fxFlex=\"56\">{{ data.volume }}</div>\r\n\t\t\t\t\t</mat-list-item>\r\n\t\t\t\t</mat-list>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\t<section fxFlex=\"50\" class=\"chart\">\r\n\t\t<h2>Price Chart - <strong style=\"color: #dec924;\">Kona Bean | Bean Factory</strong></h2>\r\n\t\t<!-- <div style=\"background: #37444c; border-top: 2px solid #1d2b35; font-size: 34px; text-align: center; padding-top: 10rem; padding-bottom: 10rem;\">Big ole' Graph</div> -->\r\n\t\t<div [chart]=\"chart\"></div>\r\n\r\n\t\t<section class=\"personal-history\">\r\n\t\t\t<h2>Your Order History</h2>\r\n\t\t\t<div *ngIf=\"!personalDetailInfo.length\"><p style=\"padding: 1rem; color: #576c78\"><i>You currently have no order history!</i></p></div>\r\n\t\t\t<div *ngIf=\"personalDetailInfo.length\">\r\n\t\t\t\t<header fxLayout=\"row\">\r\n\t\t\t\t\t<div fxFlex=\"25\">Date</div>\r\n\t\t\t\t\t<div fxFlex=\"25\">Price (USD)</div>\r\n\t\t\t\t\t<div fxFlex=\"25\">Volume Ordered</div>\r\n\t\t\t\t\t<div fxFlex=\"25\">Details</div>\r\n\t\t\t\t</header>\r\n\t\t\t\t<mat-list>\r\n\t\t\t\t\t<mat-list-item *ngFor=\"let data of personalDetailInfo\">\r\n\t\t\t\t\t\t<div fxFlex=\"25\" class=\"history-col1\">{{ data.date | date }}</div>\r\n\t\t\t\t\t\t<div fxFlex=\"25\">{{ data.price }}</div>\r\n\t\t\t\t\t\t<div fxFlex=\"25\">{{ data.volume }}</div>\r\n\t\t\t\t\t\t<div fxFlex=\"25\" class=\"history-col-last\" (click)=\"openPersonalDetails()\"><a>More Information</a></div>\r\n\t\t\t\t\t</mat-list-item>\r\n\t\t\t\t</mat-list>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t</section>\r\n\t<section fxFlex=\"25\" class=\"history\">\r\n\t\t<h2>Buy (Order) History</h2>\r\n\t\t<div fxLayout=\"column\">\r\n\t\t\t<header fxLayout=\"row\">\r\n\t\t\t\t<div fxFlex=\"20\">Price (USD)</div>\r\n\t\t\t\t<div fxFlex=\"36\">Total Volume</div>\r\n\t\t\t\t<div fxFlex=\"44\">Volume Ordered</div>\r\n\t\t\t</header>\r\n\t\t\t<mat-list>\r\n\t\t\t\t<mat-list-item *ngFor=\"let data of filledOrderData\">\r\n\t\t\t\t\t<div fxFlex=\"20\" class=\"history-col1\">{{ data.price }}</div>\r\n\t\t\t\t\t<div fxFlex=\"36\">{{ data.totalVolume }}</div>\r\n\t\t\t\t\t<div fxFlex=\"44\">{{ data.volume }}</div>\r\n\t\t\t\t</mat-list-item>\r\n\t\t\t</mat-list>\r\n\t\t</div>\r\n\t</section>\r\n</div>\r\n\r\n<!-- <p>\r\n\t<button (click)=\"addNewRandomData()\" mat-raised-button>Add New OHLCV</button>\r\n</p> -->\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  background-color: #37444c;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  font-weight: 400; }\n\nh3 {\n  font-size: 0.9rem;\n  font-weight: 400; }\n\nsection {\n  border-right: 2px solid #141e25; }\n\nsection > div {\n    padding: 0 1.5rem; }\n\nsection header {\n    margin: 0.25rem;\n    padding-bottom: 0.5rem;\n    border-bottom: 1px solid #37444c;\n    font-size: 0.7rem; }\n\nsection .spread {\n    border-top: 1px solid #37444c;\n    border-bottom: 1px solid #37444c;\n    font-size: 0.7rem;\n    margin: 0.5rem 0;\n    padding: 0.5rem 0; }\n\nsection .spread span {\n      font-weight: 900; }\n\nsection.orders {\n    border-left: 2px solid #141e25; }\n\nsection.orders h3 {\n      margin: 0.25rem; }\n\nsection.orders .buy-row {\n      height: 38vh;\n      overflow: hidden;\n      padding-top: 0.5rem; }\n\nsection.orders .buy-row mat-list mat-list-item div {\n        color: #7ef35f; }\n\nsection.orders .sell-row {\n      padding-bottom: 0.5rem; }\n\nsection.orders .sell-row mat-list {\n        height: 35vh;\n        overflow: hidden; }\n\nsection.orders .sell-row mat-list mat-list-item:last-child div {\n          color: #f76d41; }\n\nsection.orders .sell-row mat-list mat-list-item div {\n          color: #576c78; }\n\nsection.orders /deep/mat-list {\n      padding-top: 0; }\n\nsection.orders /deep/mat-list mat-list-item {\n        height: auto;\n        font-size: 0.75rem; }\n\nsection.orders /deep/mat-list mat-list-item div {\n          margin-bottom: 0; }\n\nsection.orders /deep/mat-list mat-list-item .mat-list-item-content {\n          padding: 0; }\n\nsection.chart h2 {\n    margin-bottom: 0; }\n\nsection.chart > div {\n    padding: 0; }\n\nsection.history /deep/mat-list mat-list-item {\n    color: #7ef35f;\n    font-size: 0.75rem;\n    height: auto; }\n\nsection.history /deep/mat-list mat-list-item .mat-list-item-content {\n      padding: 0 0.25rem; }\n\nsection.history /deep/mat-list mat-list-item .mat-list-item-content div {\n        color: #576c78; }\n\nsection.history /deep/mat-list mat-list-item .mat-list-item-content div.history-col1 {\n          color: #7ef35f; }\n\nsection.personal-history {\n    border-right: 0; }\n\nsection.personal-history header {\n      padding-left: 1.5rem; }\n\nsection.personal-history /deep/mat-list {\n      padding-left: 1.5rem; }\n\nsection.personal-history /deep/mat-list mat-list-item {\n        color: #7ef35f;\n        font-size: 0.75rem;\n        height: auto; }\n\nsection.personal-history /deep/mat-list mat-list-item .mat-list-item-content {\n          padding: 0 0.25rem; }\n\nsection.personal-history /deep/mat-list mat-list-item .mat-list-item-content div {\n            color: #576c78; }\n\nsection.personal-history /deep/mat-list mat-list-item .mat-list-item-content div.history-col1 {\n              color: #7ef35f; }\n\nsection.personal-history /deep/mat-list mat-list-item .mat-list-item-content div.history-col-last {\n              cursor: pointer; }\n\nsection.personal-history /deep/mat-list mat-list-item .mat-list-item-content div.history-col-last a {\n                color: #2245c7; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _services_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/chart.service */ "./src/app/_services/chart.service.ts");
/* harmony import */ var _services_order_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/order-book.service */ "./src/app/_services/order-book.service.ts");
/* harmony import */ var _services_fill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/fill.service */ "./src/app/_services/fill.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _smartcontract_smart_contract_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../smartcontract/smart-contract-modal.component */ "./src/app/smartcontract/smart-contract-modal.component.ts");
/* harmony import */ var _personal_details_personal_details_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../personal-details/personal-details-modal.component */ "./src/app/personal-details/personal-details-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(chartService, orderBookService, fillService, dialog) {
        this.chartService = chartService;
        this.orderBookService = orderBookService;
        this.fillService = fillService;
        this.dialog = dialog;
        this.currMockIndex = 0;
        this.mockBuy = [
            {
                volume: 10000,
                price: 243.00
            },
            {
                volume: 5000,
                price: 243.50
            },
            {
                volume: 15000,
                price: 245.99
            }
        ];
    }
    // Set random order book placement
    DashboardComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key === 'p')
            this.addBuyOrder();
        if (event.key === 'q' && !this.addedMockVolume) {
            this.addSellOrder();
            this.addedMockVolume = true;
        }
        if (event.key === 's')
            this.showSmartContact();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        // Set our chart theme
                        angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Highcharts"].setOptions(this.setTheme());
                        // Set our initial data
                        _a = this;
                        return [4 /*yield*/, this.getSellBookData()];
                    case 1:
                        // Set our initial data
                        _a.sellBookData = _e.sent();
                        _b = this;
                        return [4 /*yield*/, this.getBuyBookData()];
                    case 2:
                        _b.buyBookData = _e.sent();
                        _c = this;
                        return [4 /*yield*/, this.getHistoricalData()];
                    case 3:
                        _c.chartData = _e.sent();
                        _d = this;
                        return [4 /*yield*/, this.getHistoricalOrderData()];
                    case 4:
                        _d.filledOrderData = _e.sent();
                        this.personalDetailInfo = [];
                        // Setup our charts
                        this.setChart();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.setChart = function () {
        var ohlcVolume = this.setOhlcVolume();
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["StockChart"]({
            rangeSelector: {
                selected: 1
            },
            title: {
                text: 'Kona Bean | Bean Factory'
            },
            tooltip: {
                split: true
            },
            series: [
                {
                    type: 'candlestick',
                    name: 'SD Paint Price',
                    data: ohlcVolume.ohlc
                }, {
                    type: 'column',
                    name: 'Volume',
                    data: ohlcVolume.volume,
                    yAxis: 1
                }
            ],
            yAxis: [{
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'OHLC'
                    },
                    height: '60%',
                    lineWidth: 2,
                    resize: {
                        enabled: true
                    }
                }, {
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'Volume'
                    },
                    top: '65%',
                    height: '35%',
                    offset: 0,
                    lineWidth: 2
                }],
        });
    };
    DashboardComponent.prototype.setOhlcVolume = function () {
        // split the data set into ohlc and volume
        var ohlc = [], volume = [], dataLength = this.chartData.length;
        var i = 0;
        for (i; i < dataLength; i += 1) {
            ohlc.push([
                this.chartData[i][0],
                this.chartData[i][1],
                this.chartData[i][2],
                this.chartData[i][3],
                this.chartData[i][4] // close
            ]);
            volume.push([
                this.chartData[i][0],
                this.chartData[i][5] // the volume
            ]);
        }
        return { ohlc: ohlc, volume: volume };
    };
    DashboardComponent.prototype.setTheme = function () {
        return {
            colors: ['#2b908f', '#37444c', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
                '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                backgroundColor: '#1d2b35',
                style: {
                    fontFamily: '\'Unica One\', sans-serif'
                },
                plotBorderColor: '#606063'
            },
            title: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '20px'
                }
            },
            subtitle: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase'
                }
            },
            xAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            yAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#F0F0F0'
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        color: '#B0B0B3'
                    },
                    marker: {
                        lineColor: '#333'
                    }
                },
                boxplot: {
                    fillColor: '#505053'
                },
                candlestick: {
                    lineColor: 'white'
                },
                errorbar: {
                    color: 'white'
                }
            },
            legend: {
                itemStyle: {
                    color: '#E0E0E3'
                },
                itemHoverStyle: {
                    color: '#FFF'
                },
                itemHiddenStyle: {
                    color: '#606063'
                }
            },
            credits: {
                style: {
                    color: '#666'
                }
            },
            labels: {
                style: {
                    color: '#707073'
                }
            },
            drilldown: {
                activeAxisLabelStyle: {
                    color: '#F0F0F3'
                },
                activeDataLabelStyle: {
                    color: '#F0F0F3'
                }
            },
            navigation: {
                buttonOptions: {
                    symbolStroke: '#DDDDDD',
                    theme: {
                        fill: '#505053'
                    }
                }
            },
            // scroll charts
            rangeSelector: {
                buttonTheme: {
                    fill: '#505053',
                    stroke: '#000000',
                    style: {
                        color: '#CCC'
                    },
                    states: {
                        hover: {
                            fill: '#707073',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        },
                        select: {
                            fill: '#000003',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        }
                    }
                },
                inputBoxBorderColor: '#505053',
                inputStyle: {
                    backgroundColor: '#333',
                    color: 'silver'
                },
                labelStyle: {
                    color: 'silver'
                }
            },
            navigator: {
                handles: {
                    backgroundColor: '#666',
                    borderColor: '#AAA'
                },
                outlineColor: '#CCC',
                maskFill: 'rgba(255,255,255,0.1)',
                series: {
                    color: '#7798BF',
                    lineColor: '#A6C7ED'
                },
                xAxis: {
                    gridLineColor: '#505053'
                }
            },
            scrollbar: {
                barBackgroundColor: '#808083',
                barBorderColor: '#808083',
                buttonArrowColor: '#CCC',
                buttonBackgroundColor: '#606063',
                buttonBorderColor: '#606063',
                rifleColor: '#FFF',
                trackBackgroundColor: '#404043',
                trackBorderColor: '#404043'
            },
            legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
            background2: '#505053',
            dataLabelsColor: '#B0B0B3',
            textColor: '#C0C0C0',
            contrastTextColor: '#F0F0F3',
            maskColor: 'rgba(255,255,255,0.3)'
        };
    };
    DashboardComponent.prototype.getHistoricalData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.chartService.getHistoricalProductData()
                .subscribe(function (data) { return resolve(data); });
        });
    };
    DashboardComponent.prototype.getSellBookData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.orderBookService.getHistoricalSellBookData()
                .subscribe(function (data) { return resolve(data); });
        });
    };
    DashboardComponent.prototype.getBuyBookData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.orderBookService.getHistoricalBuyBookData()
                .subscribe(function (data) { return resolve(data); });
        });
    };
    DashboardComponent.prototype.getHistoricalOrderData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.fillService.getHistoricalOrderData()
                .subscribe(function (data) { return resolve(data); });
        });
    };
    DashboardComponent.prototype.addNewRandomData = function () {
        this.chartData.push([Date.now(), 666.85, 669.90, 656.00, 669.79, 25436356]);
        var ohlcVolume = this.setOhlcVolume();
        this.chart.ref.update({
            series: [
                {
                    type: 'candlestick',
                    name: 'SD Paint Price',
                    data: ohlcVolume.ohlc
                }, {
                    type: 'column',
                    name: 'Volume',
                    data: ohlcVolume.volume,
                    yAxis: 1
                }
            ]
        });
    };
    DashboardComponent.prototype.addBuyOrder = function () {
        if (this.currMockIndex >= this.mockBuy.length)
            return;
        this.buyBookData.unshift({
            volume: this.mockBuy[this.currMockIndex].volume,
            price: this.mockBuy[this.currMockIndex].price
        });
        if (this.mockBuy[this.currMockIndex].price >= this.sellBookData[this.sellBookData.length - 1].price)
            this.fillOrder();
        this.currMockIndex += 1;
    };
    DashboardComponent.prototype.addSellOrder = function () {
        this.sellBookData.push({
            volume: 2900000,
            price: 198.55
        });
    };
    DashboardComponent.prototype.addPersonalData = function (price, volume) {
        this.personalDetailInfo.push({
            date: new Date(),
            price: price,
            volume: volume
        });
    };
    DashboardComponent.prototype.fillOrder = function () {
        this.filledOrderData.unshift({
            price: this.mockBuy[this.currMockIndex].price,
            totalVolume: this.filledOrderData[0].totalVolume - this.filledOrderData[0].volume,
            volume: this.mockBuy[this.currMockIndex].volume
        });
        this.buyBookData.shift();
        this.sellBookData.push({
            volume: this.filledOrderData[0].totalVolume - this.mockBuy[this.currMockIndex].volume,
            price: 246.25
        });
        this.addPersonalData(this.mockBuy[this.currMockIndex].price, this.mockBuy[this.currMockIndex].volume);
    };
    DashboardComponent.prototype.showSmartContact = function () {
        this.smartContractComponentRef = this.dialog.open(_smartcontract_smart_contract_modal_component__WEBPACK_IMPORTED_MODULE_6__["SmartContractComponent"], {
            width: '800px'
        });
    };
    DashboardComponent.prototype.openPersonalDetails = function () {
        this.personalDetailsComponentRef = this.dialog.open(_personal_details_personal_details_modal_component__WEBPACK_IMPORTED_MODULE_7__["PersonalDetailsComponent"], {
            width: '1400px'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], DashboardComponent.prototype, "handleKeyboardEvent", null);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"],
            _services_order_book_service__WEBPACK_IMPORTED_MODULE_3__["OrderBookService"],
            _services_fill_service__WEBPACK_IMPORTED_MODULE_4__["FillService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/personal-details/personal-details-modal.component.html":
/*!************************************************************************!*\
  !*** ./src/app/personal-details/personal-details-modal.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\r\n\t<section fxFlex=\"100\">\r\n\t\t<h2 style=\"padding-bottom: 2rem;\">Details on Your Order</h2>\r\n\t\t<header fxLayout=\"row\" style=\"font-weight: bold; padding-bottom: 0.5rem;\">\r\n\t\t\t<div fxFlex=\"16.667\">Date Filled</div>\r\n\t\t\t<div fxFlex=\"16.667\">Price (USD)</div>\r\n\t\t\t<div fxFlex=\"16.667\">Volume Ordered</div>\r\n\t\t\t<div fxFlex=\"16.667\">Shipping Agreement (PPV)</div>\r\n\t\t\t<div fxFlex=\"16.667\">Taxes and Fees</div>\r\n\t\t\t<div fxFlex=\"16.667\">Total Price</div>\r\n\t\t</header>\r\n\t\t<div fxLayout=\"row\">\r\n\t\t\t<div fxFlex=\"16.667\" style=\"text-align: left;\">Jun 1, 2018 15:22 CST</div>\r\n\t\t\t<div fxFlex=\"16.667\">5.99 (USD)</div>\r\n\t\t\t<div fxFlex=\"16.667\">15000 (LBs)</div>\r\n\t\t\t<div fxFlex=\"16.667\">5.64 (USD)</div>\r\n\t\t\t<div fxFlex=\"16.667\">4941.75 (USD)</div>\r\n\t\t\t<div fxFlex=\"16.667\">94791.75 (USD)</div>\r\n\t\t</div>\r\n\t\t<div style=\"text-align: right; padding-top: 2rem;\">\r\n\t\t\t<button mat-raised-button color=\"warn\" style=\"margin-right: 1rem;\">Shipping Details - <i>Pending...</i></button>\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"openSmartContract()\">Smart Contract</button>\r\n\t\t</div>\r\n\t</section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/personal-details/personal-details-modal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/personal-details/personal-details-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: PersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsComponent", function() { return PersonalDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _smartcontract_smart_contract_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../smartcontract/smart-contract-modal.component */ "./src/app/smartcontract/smart-contract-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PersonalDetailsComponent = /** @class */ (function () {
    function PersonalDetailsComponent(dialogRef, dialog, data) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.data = data;
    }
    PersonalDetailsComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PersonalDetailsComponent.prototype.openSmartContract = function () {
        this.smartContractComponentRef = this.dialog.open(_smartcontract_smart_contract_modal_component__WEBPACK_IMPORTED_MODULE_2__["SmartContractComponent"], {
            width: '800px'
        });
    };
    PersonalDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smart-contract-modal',
            template: __webpack_require__(/*! ./personal-details-modal.component.html */ "./src/app/personal-details/personal-details-modal.component.html")
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], Object])
    ], PersonalDetailsComponent);
    return PersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/smartcontract/smart-contract-modal.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/smartcontract/smart-contract-modal.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"./../../assets/DanielSmartContract.png\" width=\"740px\">"

/***/ }),

/***/ "./src/app/smartcontract/smart-contract-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/smartcontract/smart-contract-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: SmartContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartContractComponent", function() { return SmartContractComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SmartContractComponent = /** @class */ (function () {
    function SmartContractComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SmartContractComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SmartContractComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smart-contract-modal',
            template: __webpack_require__(/*! ./smart-contract-modal.component.html */ "./src/app/smartcontract/smart-contract-modal.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], SmartContractComponent);
    return SmartContractComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\projects\green-bean-inc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map