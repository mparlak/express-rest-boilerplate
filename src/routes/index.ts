import { UserController } from "../controllers/user.controller"
import { PostController } from "../controllers/post.controller"

export const Routes = [{
    method: "get",
    route: "/v1/users",
    controller: UserController,
    action: "get"
}, {
    method: "get",
    route: "/v1/users/:id",
    controller: UserController,
    action: "getById"
}, {
    method: "post",
    route: "/v1/users",
    controller: UserController,
    action: "post"
}, {
    method: "delete",
    route: "/v1/users/:id",
    controller: UserController,
    action: "delete"
},
{
    method: "get",
    route: "/v1/posts",
    controller: PostController,
    action: "get"
}, {
    method: "get",
    route: "/v1/posts/:id",
    controller: PostController,
    action: "getById"
}, {
    method: "post",
    route: "/v1/posts",
    controller: PostController,
    action: "post"
}, {
    method: "delete",
    route: "/v1/posts/:id",
    controller: PostController,
    action: "delete"
}
]