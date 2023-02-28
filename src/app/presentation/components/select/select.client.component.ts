import { Component } from "@angular/core";
import ClientUseCase from "src/app/core/usecases/client/client.usecase";
import { Select } from "./select.component";

@Component({
    selector: 'cc-select-client',
    templateUrl: './select.component.html'
})
export class SelectClientComponent extends Select {

    override bindValue: string = "name";
    override bindId: string = "id";
    override placeHolder: string = "Cliente";

    constructor(private clientUseCase: ClientUseCase) {
        super();
        clientUseCase.getClients().subscribe(clients => {
            this.itemList = clients;
            this.sourceComplete();
        });
    }

}