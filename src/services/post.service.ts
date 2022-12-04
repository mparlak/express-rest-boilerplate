import IBaseResponse from '../models/base.response';
import PostResponseDto from '../models/post/post.response.dto';
import CreatePostRequest from '../models/post/create.post.request';
import { Post } from '../persistence/entities/post';
import { AppDataSource } from '../persistence/data-source'

interface IPostService {
    getAll(): Promise<IBaseResponse<Array<PostResponseDto>>>;
    getById (id: number): Promise<IBaseResponse<PostResponseDto>>;
    create(createPostRequest: CreatePostRequest): Promise<IBaseResponse<PostResponseDto>>;
}

class PostService implements IPostService {

    private postRepository = AppDataSource.getRepository(Post)

    public getAll = async (): Promise<IBaseResponse<Array<PostResponseDto>>> => {
        let response: IBaseResponse<Array<PostResponseDto>> = {
            hasError: false,
            result: Array<PostResponseDto>(),
            total: 0,
            errors: []
        };

        var posts = await this.postRepository.find();
        var postResult = Object.assign(new Array<PostResponseDto>(), posts);
        response.result = postResult;
        return response;
    }

    public getById = async (id: number): Promise<IBaseResponse<PostResponseDto>> => {
        let response: IBaseResponse<PostResponseDto> = {
            hasError: false,
            result: new PostResponseDto(),
            total: 0,
            errors: []
        };

        const post = await this.postRepository.findOne({
            where: { id }
        })
        response.result = Object.assign(new PostResponseDto(), post);
        return response;
    }

    public create = async (createPostRequest: CreatePostRequest): Promise<IBaseResponse<PostResponseDto>> => {

        let response: IBaseResponse<PostResponseDto> = {
            hasError: false,
            result: new PostResponseDto(),
            total: 0,
            errors: []
        };

        try {
            const post = Object.assign(new Post(), createPostRequest);
            const currentPost = await this.postRepository.save(post);
            response.result = Object.assign(new PostResponseDto(), currentPost);
        } catch (e) {
            throw e;
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
export default new PostService();