import IBaseResponse from '../models/base.response';
import UserResponseDto from '../models/user/user.response.dto';
import CreateUserRequest from '../models/user/create.user.request';
import { User } from '../persistence/entities/user';
import { AppDataSource } from '../persistence/data-source'
import logger from '../utils/custom.es.logging';

interface IUserService {
    getAll(): Promise<IBaseResponse<Array<UserResponseDto>>>;
    getById(id: number): Promise<IBaseResponse<UserResponseDto>>;
    create(createUserRequest: CreateUserRequest): Promise<IBaseResponse<UserResponseDto>>;
}

class UserService implements IUserService {

    private userRepository = AppDataSource.getRepository(User)

    public getAll = async (): Promise<IBaseResponse<Array<UserResponseDto>>> => {
        let response: IBaseResponse<Array<UserResponseDto>> = {
            hasError: false,
            result: Array<UserResponseDto>(),
            total: 0,
            errors: []
        };

        const [users, usersCount] = await this.userRepository.findAndCount();
        response.result = Object.assign(new Array<UserResponseDto>(), users);
        response.total = usersCount
        return response;
    }

    public getById = async (id: number): Promise<IBaseResponse<UserResponseDto>> => {
        let response: IBaseResponse<UserResponseDto> = {
            hasError: false,
            result: new UserResponseDto(),
            total: 0,
            errors: []
        };

        const user = await this.userRepository.findOne({
            where: { id }
        })
        response.result = Object.assign(new UserResponseDto(), user);
        return response;
    }

    public create = async (createUserRequest: CreateUserRequest): Promise<IBaseResponse<UserResponseDto>> => {

        let response: IBaseResponse<UserResponseDto> = {
            hasError: false,
            result: null,
            total: 0,
            errors: []
        };

        try {
            const user = Object.assign(new User(), createUserRequest);
            await this.userRepository.save(user);
            response.result = Object.assign(new UserResponseDto(), user);
        } catch (e) {
            logger.error('oops there is a problem',e);
        }
        return response;
    }

    public update = async () => {
        return "";
    }

    public patch = async () => {
        return "";
    }

    public delete = async () => {
        return "";
    }
}
export default new UserService();