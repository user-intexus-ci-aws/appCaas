import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../../models/product";
import { ProductRepository } from "../../repositories/product.repository";

@Injectable({
    providedIn: 'root'
})
export class GetProductsByClientUseCase {
    
    constructor(private productRepository: ProductRepository) { }

    get(): Observable<Product[]> {
        return this.productRepository.getProducts()
    }

}