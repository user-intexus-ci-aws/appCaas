import { Component } from "@angular/core";
import { ControlContainer, FormBuilder, FormGroupDirective } from "@angular/forms";
import { GetProductsByClientUseCase } from "src/app/core/usecases/product/get-products-by-client.usecase";
import { Select } from "./select.component";

@Component({
    selector: 'cc-select-product',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class SelectProductComponent extends Select {

    override bindValue: string = "name";
    override bindId: string = "id";
    override controlName = "idProduct"

    constructor(getProductsByClientUseCase: GetProductsByClientUseCase) {
        super();
        getProductsByClientUseCase.get().subscribe(products => {
            this.itemList = products;
            this.sourceComplete();
        });
    }
}