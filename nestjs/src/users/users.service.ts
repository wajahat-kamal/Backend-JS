// users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'Ali', email: 'ali@gmail.com' },
        { id: 2, name: 'Sara', email: 'sara@gmail.com' },
    ];

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(u => u.id === id);
        if (!user) throw new NotFoundException(`User ${id} nahi mila!`);
        return user;
    }

    create(data: { name: string; email: string }) {
        const newUser = { id: Date.now(), ...data };
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, data: Partial<{ name: string; email: string }>) {
        const user = this.findOne(id);
        Object.assign(user, data);
        return user;
    }

    remove(id: number) {
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1) throw new NotFoundException(`User ${id} nahi mila!`);
        this.users.splice(index, 1);
        return { message: 'User delete ho gaya!' };
    }
}