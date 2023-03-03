import { Component } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { GetPrintersUseCase } from 'src/app/core/usecases/printer/get-printers.usecase';
import { Select } from './select.component';

@Component({
  selector: 'cc-select-printer',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class SelectPrinterComponent extends Select {

  override bindValue: string = "name";
    override bindId: string = "id";
    override controlName = "idPrinter"

    constructor(getPrintersUseCase: GetPrintersUseCase) {
        super();
        getPrintersUseCase.get().subscribe(printers => {
            this.itemList = printers;
            this.sourceComplete();
        });
    }

}
