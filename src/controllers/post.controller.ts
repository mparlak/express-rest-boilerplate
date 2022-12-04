import { NextFunction, Request, Response } from "express"
import PostService  from '../services/post.service'
import CreatePostRequest from '../models/post/create.post.request';

export class PostController {

    async get(req: Request, res: Response, next: NextFunction) {
        return await PostService.getAll();
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        const id = parseInt(req.params.id)
        let response = await PostService.getById(id);
        return response;
    }

    async post(req: Request, res: Response, next: NextFunction) {
        var createUserRequest = new CreatePostRequest();
        createUserRequest.body = req.body.body;
        createUserRequest.content = req.body.content;
        var response = await PostService.create(createUserRequest);
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