import { Observable } from "rxjs";
import { Printer } from "../models/printer";

export abstract class PrinterRepository {
    abstract getPrinters(): Observable<Printer[]>
}