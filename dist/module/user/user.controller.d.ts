import { CreateDto } from "./dto/create.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): any[];
    createUser(body: CreateDto): any;
}
