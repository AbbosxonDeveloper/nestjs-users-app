import { Injectable, NotFoundException } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { CreateDto } from "./dto/create.dto";

@Injectable()
export class UserService {
    constructor(private readonly authService: AuthService){
        this.usersList = []
    }
    private usersList: any[]

    getUsers():any[]{
        return this.usersList
    }

    createUser(body: CreateDto | any):any{
        if(!body){
            throw new NotFoundException()
        }
        body.id = this.usersList.at(-1)?.id +1 || 1
        
        
        this.usersList.push(body)
        return body
    }
}