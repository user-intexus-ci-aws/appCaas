import { Component, Input } from "@angular/core";
import { ControlContainer, FormBuilder, FormGroup, FormGroupDirective } from "@angular/forms";
import { GetClientsUseCase } from "src/app/core/usecases/client/get-clients.usecase";
import { Select } from "./select.component";

@Component({
    selector: 'cc-select-client',
    templateUrl: './select.component.html',
    viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class SelectClientComponent extends Select {

    override bindValue: string = "name";
    override bindId: string = "id";
    override placeHolder: string = "Cliente";
    override controlName = "idClient"

    constructor(getClientsUseCase: GetClientsUseCase) {
        super();
        getClientsUseCase.get().subscribe(clients => {
            this.itemList = clients;
            this.sourceComplete();
        });
    }
}