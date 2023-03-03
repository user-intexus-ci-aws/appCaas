import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { TransactionStatus } from "src/app/core/models/transaction.status";
import { TransactionRepository } from "src/app/core/repositories/transaction.repository";

@Injectable({
    providedIn: 'root'
})
export class TransactionMockRepository extends TransactionRepository {

    getTransactionStatusResponse: TransactionStatus[] = [];

    constructor() {
        super();
        this.getTransactionStatusResponse.push(
            { id: 1, name: "Existosa"},
            { id: 2, name: "Fallida" },
            { id: 3, name: "En proceso" }
        )
    }

    getTransactionStatus(): Observable<TransactionStatus[]> {
        return new Observable<TransactionStatus[]>((obs: Observer<TransactionStatus[]>) => {
            obs.next(this.getTransactionStatusResponse)
            obs.complete();
        })
    }

}