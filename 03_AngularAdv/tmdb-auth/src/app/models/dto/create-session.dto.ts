export class CreateSessionDto {
    request_token: string;

    constructor(request_token: string) {
        this.request_token = request_token;
    }
}
