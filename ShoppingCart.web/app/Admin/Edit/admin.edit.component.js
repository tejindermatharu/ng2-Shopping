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
var AdminEditComponent = (function () {
    function AdminEditComponent() {
    }
    AdminEditComponent.prototype.ngOnInit = function () {
    };
    AdminEditComponent.prototype.ngOnChanges = function (changes) {
        // changes.prop contains the old and the new value...
    };
    AdminEditComponent.prototype.toggleEditMode = function (item) {
        // Toggle
        item.editMode = !item.editMode;
    };
    ;
    return AdminEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AdminEditComponent.prototype, "products", void 0);
AdminEditComponent = __decorate([
    core_1.Component({
        selector: 'admin-edit',
        templateUrl: 'app/Admin/Edit/admin.edit.html',
        styleUrls: ['app/Admin/Edit/admin.edit.css']
    }),
    __metadata("design:paramtypes", [])
], AdminEditComponent);
exports.AdminEditComponent = AdminEditComponent;
//# sourceMappingURL=admin.edit.component.js.map