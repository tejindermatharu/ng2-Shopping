"use strict";
var admin_main_component_1 = require("./admin.main.component");
var product_1 = require("../../Models/product");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var adminMainComponent;
var product = new product_1.Product("product1", "desc", 10);
describe('Admin Main Component Tests', function () {
    beforeEach(function () {
        var MockProductDataService = (function () {
            function MockProductDataService() {
            }
            MockProductDataService.prototype.save = function (product) { throw new Error("Not implemented"); };
            MockProductDataService.prototype.getAllProducts = function () {
                return Observable_1.Observable.of([product]);
            };
            MockProductDataService.prototype.getAllProductsPromise = function () { throw new Error("Not implemented"); };
            return MockProductDataService;
        }());
        var mockProductDataService = new MockProductDataService();
        adminMainComponent = new admin_main_component_1.AdminMainComponent((mockProductDataService));
    });
    describe('should add product to list when product is added', function () {
        var product = new product_1.Product();
        adminMainComponent.productAdded(product);
        expect(adminMainComponent.productsList[0]).toEqual(product);
    });
});
//# sourceMappingURL=admin.main.component.test.js.map