export default class HttpStatusCode {
    public static toUserResponseDto(action: string): any {
        let statusCode = null;
        switch (action) {
            case 'get':
                statusCode = 200;
                break;
            case 'getById':
                statusCode = 200;
                break;
            case 'post':
                statusCode = 201;
                break;
            case 'put':
                statusCode = 200;
                break;
            case 'patch':
                statusCode = 200;
                break;
            case 'delete':
                statusCode = 204;
                break;
        }
        return statusCode;
    }
}