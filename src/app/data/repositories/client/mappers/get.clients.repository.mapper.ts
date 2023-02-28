import { Client } from "src/app/core/models/client"

export class GetClientsRepositoryMapper {

    mapFrom(getClientsOut: GetClientsOut): Client {
        return {
            id: getClientsOut.ClientId,
            name: getClientsOut.Name
        }
    }

}

export interface GetClientsOut {
    ClientId: number,
    Name: string
}