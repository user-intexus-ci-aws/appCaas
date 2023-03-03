import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { Client } from "src/app/core/models/client";
import { ClientRepository } from "src/app/core/repositories/client.repository";

@Injectable({ 
    providedIn: 'root'
 })
export class ClientMockRepository extends ClientRepository {

    getClientsResponse: Client[] = [];

    constructor() {
        super();
        this.getClientsResponse.push(
            { id: 6, name: "Tuya"},
            { id: 7, name: "Colsubsidio" },
            { id: 8, name: "Coomeva" },
            { id: 10, name: "Serfinanza" },
            { id: 11, name: "Banco del Pacifico" },
            { id: 12, name: "Banco de Finanzas" }
        )
    }

    getClients(): Observable<Client[]> {
        return new Observable<Client[]>((obs: Observer<Client[]>) => {
            obs.next(this.getClientsResponse)
            obs.complete();
        })
    }

}