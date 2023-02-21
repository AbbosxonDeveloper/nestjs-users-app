import { AuthService } from "../auth/auth.service";
import { CreateDto } from "./dto/create.dto";
export declare class UserService {
    private readonly authService;
    constructor(authService: AuthService);
    private usersList;
    getUsers(): any[];
    createUser(body: CreateDto | any): any;
}
