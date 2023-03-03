import { Observable } from "rxjs";
import { User } from "../models/user";


export abstract class UserRepository {

    abstract login(): Observable<User[]>

}
