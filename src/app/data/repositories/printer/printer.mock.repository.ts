import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { Printer } from "src/app/core/models/printer";
import { PrinterRepository } from "src/app/core/repositories/printer.repository";

@Injectable({ 
    providedIn: 'root'
 })
export class PrinterMockRepository extends PrinterRepository {

    getPrintersResponse: Printer[] = [];

    constructor() {
        super();
        this.getPrintersResponse.push(
            { id: 1, name: "Impresora 1"},
            { id: 2, name: "Impresora 2" }
        )
    }

    getPrinters(): Observable<Printer[]> {
        return new Observable<Printer[]>((obs: Observer<Printer[]>) => {
            obs.next(this.getPrintersResponse)
            obs.complete();
        })
    }

}