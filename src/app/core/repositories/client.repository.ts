import { Observable } from "rxjs";
import { Client } from "../models/client";

export abstract class ClientRepository {

    abstract getClients(): Observable<Client[]>

}