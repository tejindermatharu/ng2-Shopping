"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var admin_main_component_1 = require("./Main/admin.main.component");
var input_component_1 = require("./Input/input.component");
var admin_edit_component_1 = require("./Edit/admin.edit.component");
var product_data_service_1 = require("./Repository/product.data.service");
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, platform_browser_1.BrowserModule],
        declarations: [admin_main_component_1.AdminMainComponent,
            input_component_1.InputComponent,
            admin_edit_component_1.AdminEditComponent],
        providers: [product_data_service_1.ProductDataService]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map