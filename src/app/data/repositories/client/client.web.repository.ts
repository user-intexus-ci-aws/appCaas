import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, Observer, throwError } from "rxjs";
import { Client } from "src/app/core/models/client";
import { ClientRepository } from "src/app/core/repositories/client.repository";
import { environment } from "src/app/environments/environment";
import { BaseResponse } from "../../models/base.response";
import { GetClientsRepositoryMapper } from "./mappers/get.clients.repository.mapper";

@Injectable({ 
    providedIn: 'root'
 })
export class ClientWebRepository extends ClientRepository {

    clientUrl: String;

    constructor(private http: HttpClient) {
        super();
        this.clientUrl = environment.clientsUrl;
    }

    getClients(): Observable<Client[]> {
        let mapper = new GetClientsRepositoryMapper();
        return this.http.get<BaseResponse>(`${this.clientUrl}GetRow`)
            .pipe(
                map((res) => {
                    res = Object.assign(new BaseResponse(), res);
                    if (res.isSuccess())
                        return JSON.parse(res.getValue("Clients")!).map(mapper.mapFrom);
                    else
                        throw Error(res.message)
                }),
                catchError(err => {
                    return throwError(() => err);
                })
            )
    }

}