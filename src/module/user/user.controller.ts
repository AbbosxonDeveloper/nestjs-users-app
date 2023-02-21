import { Controller,Body, Post, Get, Patch,Delete, HttpCode, HttpStatus } from "@nestjs/common";
import { CreateDto } from "./dto/create.dto";
import { ApiTags } from "@nestjs/swagger/dist";
import { UserService } from "./user.service";

@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Get('/get')
    getUsers(){
        return this.userService.getUsers()
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('/create')
    createUser(@Body() body: CreateDto): any{
        const createdUser = this.userService.createUser(body)
        return createdUser
    }
}
