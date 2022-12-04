import UserResponseDto from '../../models/user/user.response.dto'
import CreateUserRequest from '../../models/user/create.user.request'
import { User } from '../../persistence/entities/user'

export default class UserMapper {
    public static toUserResponseDto(user: User): UserResponseDto {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age
        };
    }

    public static toUserEntity(user: CreateUserRequest): User {
        return {
            id: null,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age
        };
    }

    public static toUserResponseListDto(user: Array<User>): Array<UserResponseDto> {
        return user.map((m)=> this.toUserResponseDto(m));
    }
}