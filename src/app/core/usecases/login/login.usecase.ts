import { Observable } from 'rxjs';
import { UseCase } from "src/base/use-case";
import { User } from "../../models/user";
import { UserRepository } from "../../repositories/user.repository";


export class UserLoginUseCase implements UseCase<{ userName: string; password: string }, User> {

    constructor(private userRepository: UserRepository) { }

    execute(
       params: { userName: string, password: string },
    ): Observable<User> {
        return this.userRepository.login(params);
    }
}
