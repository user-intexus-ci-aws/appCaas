import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    template: ''
})
export abstract class Select {
    
    @Input() selectedItem: any;
    @Input() itemList: any;

    @Output() onChange = new EventEmitter;
    @Output() complete = new EventEmitter;

    bindValue: string;
    bindId: string;
    placeHolder: string;
    multiSelect = false;
    controlName: string;

    changeItem() { this.onChange.emit(this.selectedItem); };

    sourceComplete() { this.complete.emit() };
}