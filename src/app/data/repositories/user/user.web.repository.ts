import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { UserRepository } from 'src/app/core/repositories/user.repository'
import { User } from 'src/app/core/models/user';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
    userMapper = new UserImplementationRepositoryMapper();
    myAppUrl= 'http://10.2.3.79:9096/';
    myApiUrl='api/Users'

    constructor(private http: HttpClient) {
        super();
    }

    login(params: {userName: string, password: string}): Observable<User> {
        return this.http
            .post<UserEntity>(`${this.myAppUrl}${this.myApiUrl}/Login`, {params})
            .pipe(map(this.userMapper.mapFrom));
    }
}
