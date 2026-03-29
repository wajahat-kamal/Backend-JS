import { Injectable } from '@nestjs/common';

type user = {id: number, name: string, age: number}

@Injectable()
export class UsersService {
    private users: user[] = [
        { id: 1, name: "wajahat", age: 16 },
        { id: 2, name: "kamal", age: 15 },
        { id: 3, name: "khan", age: 14 },
    ]

    getAllUsers(){
        return this.users
    }
}
