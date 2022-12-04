import ErrorResponse from './error.response';

export default interface IBaseResponse<T> {
    hasError: boolean;
    result: T;
    total: number;
    errors: Array<ErrorResponse>
}