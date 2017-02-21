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
var product_1 = require("../../Models/product");
var InputComponent = (function () {
    function InputComponent() {
        this.added = new core_1.EventEmitter();
        this.name = 'Input';
        this.createNewProduct();
    }
    InputComponent.prototype.add = function () {
        var product = Object.assign(this.product);
        //Reset product object
        this.createNewProduct();
        this.added.emit(product);
    };
    InputComponent.prototype.createNewProduct = function () {
        this.product = new product_1.Product();
        this.product.date = new Date();
    };
    return InputComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InputComponent.prototype, "added", void 0);
InputComponent = __decorate([
    core_1.Component({
        selector: 'admin-input',
        templateUrl: 'app/Admin/Input/input.html'
    }),
    __metadata("design:paramtypes", [])
], InputComponent);
exports.InputComponent = InputComponent;
//# sourceMappingURL=input.component.js.map