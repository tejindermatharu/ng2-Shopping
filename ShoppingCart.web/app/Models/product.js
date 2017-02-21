"use strict";
var Product = (function () {
    function Product(name, desc, price, date, editMode) {
        if (name === void 0) { name = ''; }
        if (desc === void 0) { desc = ''; }
        if (price === void 0) { price = 0; }
        if (editMode === void 0) { editMode = false; }
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.date = date;
        this.editMode = editMode;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map