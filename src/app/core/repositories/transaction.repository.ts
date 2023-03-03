import { Observable } from "rxjs";
import { TransactionStatus } from "../models/transaction.status";

export abstract class TransactionRepository {

    abstract getTransactionStatus(): Observable<TransactionStatus[]>;

}