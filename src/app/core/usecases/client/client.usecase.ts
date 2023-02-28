import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../../models/client";
import { ClientRepository } from "../../repositories/client.repository";

@Injectable()
export default class ClientUseCase {
    
    constructor(private clientRepository: ClientRepository) { }

    getClients(): Observable<Client[]> {
        return this.clientRepository.getClients()
    }

}