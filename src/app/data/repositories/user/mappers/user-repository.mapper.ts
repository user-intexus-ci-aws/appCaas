import { Mapper } from 'src/base/mapper';
import { User } from 'src/app/core/models/user';
import { UserEntity } from '../entities/user-entity';


export class UserImplementationRepositoryMapper extends Mapper<UserEntity, User> {
    mapFrom(param: UserEntity): User {
        return {
            message: param.message,
            success: param.success,
            errors: param.errors,
            parametros: param.parametros
        };
    }
    mapTo(param: User): UserEntity {
        return {
            message: param.message,
            success: param.success,
            errors: param.errors,
            parametros: param.parametros
        }
    }
}
