import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { Product } from "src/app/core/models/product";
import { ProductRepository } from "src/app/core/repositories/product.repository";

@Injectable({ 
    providedIn: 'root'
 })
export class ProductMockRepository extends ProductRepository {

    getProductsResponse: Product[] = [];

    constructor() {
        super();
        this.getProductsResponse.push(
            { id: 1, name: "Visa classic"},
            { id: 2, name: "Diners" },
            { id: 3, name: "Mastercard" }
        )
    }

    getProducts(): Observable<Product[]> {
        return new Observable<Product[]>((obs: Observer<Product[]>) => {
            obs.next(this.getProductsResponse)
            obs.complete();
        })
    }

}