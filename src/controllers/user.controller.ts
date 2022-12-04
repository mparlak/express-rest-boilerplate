import { NextFunction, Request, Response } from "express"
import UserService  from '../services/user.service'
import CreateUserRequest from '../models/user/create.user.request';

export class UserController {

    async get(req: Request, res: Response, next: NextFunction) {
        return await UserService.getAll();
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        const id = parseInt(req.params.id)
        let response = await UserService.getById(id);
        return response;
    }

    async post(req: Request, res: Response, next: NextFunction) {
        var createUserRequest = new CreateUserRequest();
        createUserRequest.firstName = req.body.firstName;
        createUserRequest.lastName = req.body.lastName;
        createUserRequest.age = req.body.age;
        var response = await UserService.create(createUserRequest);
        return response;
    }

    async delete(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        // let userToRemove = await this.userRepository.findOneBy({ id })

        // if (!userToRemove) {
        //     return "this user not exist"
        // }

        // await this.userRepository.remove(userToRemove)

        return "user has been removed"
    }

}