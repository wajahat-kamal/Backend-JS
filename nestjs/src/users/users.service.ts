import { Injectable, NotFoundException } from '@nestjs/common';

export interface User { id: number; name: string; age: number };

@Injectable()
export class UsersService {
    private users: User[] = [
        { id: 1, name: "wajahat", age: 16 },
        { id: 2, name: "kamal", age: 15 },
        { id: 3, name: "khan", age: 14 },
    ];

    getAllUsers(): User[] {
        return this.users;
    }

    getUserById(id: number) {
        const user = this.users.find((user) => user.id === id)
        if (!user) throw new NotFoundException(`User with id ${id} not found`);
        return user
    }

    createUser(body: { name: string, age: number }) {
        const newUser = { id: 4, ...body }
        this.users.push(newUser)
        return {message: "User Created!", newUser};
    }
}