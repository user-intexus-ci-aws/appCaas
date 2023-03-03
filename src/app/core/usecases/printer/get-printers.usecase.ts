import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Printer } from "../../models/printer";
import { PrinterRepository } from "../../repositories/printer.repository";

@Injectable({
    providedIn: 'root'
})
export class GetPrintersUseCase {
    
    constructor(private printerRepository: PrinterRepository) { }

    get(): Observable<Printer[]> {
        return this.printerRepository.getPrinters();
    }

}