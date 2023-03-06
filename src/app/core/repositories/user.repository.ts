import { Observable } from "rxjs";
import { User } from "../models/user";


export abstract class UserRepository {

    abstract login(params:{userName:string, password:string}): Observable<User>;

}
