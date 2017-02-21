import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { IProduct }  from '../../Models/product';

@Component({
    selector: 'admin-edit',
    templateUrl: 'app/Admin/Edit/admin.edit.html'
})

export class AdminEditComponent implements OnChanges, OnInit  {

    @Input() products: IProduct[];

    constructor() {
    }

    ngOnInit(): void {

    }

    ngOnChanges(changes: Object): void {
        // changes.prop contains the old and the new value...
    }

    public toggleEditMode(item: IProduct) {
        // Toggle
        item.editMode = !item.editMode;
    };
}