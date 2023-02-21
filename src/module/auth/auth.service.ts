import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    constructor(){}

    generateToken(): string{
        return 'ok'
    }
}