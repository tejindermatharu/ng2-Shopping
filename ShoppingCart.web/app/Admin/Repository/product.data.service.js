"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
var ProductDataService = (function () {
    function ProductDataService(http) {
        this.http = http;
        this.baseUrl = '/api/product/';
    }
    ProductDataService.prototype.save = function (product) {
        var body = JSON.stringify(product);
        var headers = this.getHeaders();
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, body, options)
            .catch(function (error) {
            return Observable_1.Observable.throw(error.json() || 'Server error');
        });
    };
    ProductDataService.prototype.getAllProducts = function () {
        return this.http.get(this.baseUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'Server error'); });
    };
    ProductDataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProductDataService.prototype.getHeaders = function () {
        return new http_1.Headers({ 'Content-Type': 'application/json' });
    };
    ProductDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductDataService);
    return ProductDataService;
}());
exports.ProductDataService = ProductDataService;
//# sourceMappingURL=product.data.service.js.map