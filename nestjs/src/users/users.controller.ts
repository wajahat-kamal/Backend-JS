import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get()
    getAll() {
        return this.userService.getAllUsers()
    }

    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userService.getUserById(Number(id))
    }

    @Post("create")
    create(@Body() body: { name: string, age: number }) {
        return this.userService.createUser(body)
    }

    @Delete(':id')
    remove(@Param("id") id: string){
        return this.userService.deleteUser(Number(id))
    }
}
