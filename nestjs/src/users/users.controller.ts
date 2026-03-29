import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import type { data, UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get()
    getAll() {
        return this.userService.findAll()
    }

    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userService.findOne(Number(id))
    }

    @Post("create")
    create(@Body() body: data) {
        return this.userService.create(body)
    }

    @Patch(':id')
    update(@Param("id") id: number, @Body() body: data) {
        return this.userService.update(Number(id), body)
    }

    @Delete(':id')
    remove(@Param("id") id: string) {
        return this.userService.remove(Number(id))
    }
}
