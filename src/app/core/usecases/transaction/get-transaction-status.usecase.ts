import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TransactionStatus } from "../../models/transaction.status";
import { TransactionRepository } from "../../repositories/transaction.repository";

@Injectable({
    providedIn: 'root'
})
export class GetTransactionStatusUseCase {
    
    constructor(private transactionRepository: TransactionRepository) { }

    get(): Observable<TransactionStatus[]> {
        return this.transactionRepository.getTransactionStatus();
    }

}