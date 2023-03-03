import { Component, Input } from "@angular/core";
import { ControlContainer, FormBuilder, FormGroup, FormGroupDirective } from "@angular/forms";
import { GetClientsUseCase } from "src/app/core/usecases/client/get-clients.usecase";
import { GetTransactionStatusUseCase } from "src/app/core/usecases/transaction/get-transaction-status.usecase";
import { Select } from "./select.component";

@Component({
    selector: 'cc-select-transaction-status',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class SelectTransactionStatusComponent extends Select {

    override bindValue: string = "name";
    override bindId: string = "id";
    override controlName = "idStatus"

    constructor(getTransactionStatusUseCase: GetTransactionStatusUseCase) {
        super();
        getTransactionStatusUseCase.get().subscribe(status => {
            this.itemList = status;
            this.sourceComplete();
        });
    }
}