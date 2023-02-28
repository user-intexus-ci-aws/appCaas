import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../../models/client";
import { ClientRepository } from "../../repositories/client.repository";

@Injectable({
    providedIn: 'root'
})
export class GetClientsUseCase {
    
    constructor(private clientRepository: ClientRepository) { }

    get(): Observable<Client[]> {
        return this.clientRepository.getClients();
    }

}