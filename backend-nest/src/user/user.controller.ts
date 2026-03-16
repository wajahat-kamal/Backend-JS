import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getData() {
        return "User data fetch successfully!"
    }
}
