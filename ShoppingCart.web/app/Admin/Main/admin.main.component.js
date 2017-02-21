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
var core_1 = require("@angular/core");
var product_data_service_1 = require("../Repository/product.data.service");
var AdminMainComponent = (function () {
    function AdminMainComponent(productService) {
        this.productService = productService;
    }
    AdminMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        //using an observable
        this.productService.getAllProducts()
            .subscribe(function (data) { return _this.productsList = Object.assign(data); });
        //using a promise
        //this.productService.getAllProductsPromise()
        //    .then((data) => this.products = data);
    };
    AdminMainComponent.prototype.productAdded = function (product) {
        var _this = this;
        this.productService.save(product).subscribe(function () {
            _this.productsList.push(Object.assign(product));
            console.log('product saved successfully');
        });
    };
    return AdminMainComponent;
}());
AdminMainComponent = __decorate([
    core_1.Component({
        selector: 'admin-main-component',
        templateUrl: 'app/Admin/Main/admin.main.html',
        styleUrls: ['app/Admin/admin.css']
    }),
    __metadata("design:paramtypes", [product_data_service_1.ProductDataService])
], AdminMainComponent);
exports.AdminMainComponent = AdminMainComponent;
//# sourceMappingURL=admin.main.component.js.map