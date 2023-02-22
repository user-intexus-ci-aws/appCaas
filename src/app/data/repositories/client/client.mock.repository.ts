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
            { id: 1, name: "Tuya"},
            { id: 2, name: "Colsubsidio" }
        )
    }

    getClients(): Observable<Client[]> {
        return new Observable<Client[]>((obs: Observer<Client[]>) => {
            obs.next(this.getClientsResponse)
            obs.complete();
        })
    }

}