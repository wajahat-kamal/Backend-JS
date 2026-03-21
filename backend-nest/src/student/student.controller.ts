import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDTO } from 'src/dto/student.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';


@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    @UseGuards(AuthGuard)
    getAll() {
        return this.studentService.getAllStudent()
    }

    @Get(":id")
    getOne(@Param("id") id: string) {
        return this.studentService.getStudentById(Number(id))
    }

    @Post()
    create(@Body() body: StudentDTO) {
        return this.studentService.createStudent(body)
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() body: StudentDTO){
        return this.studentService.updateStudent(Number(id), body)
    }

    @Patch(":id")
    patch(@Param("id") id: string, @Body() body: StudentDTO){
        return this.studentService.patchStudent(Number(id), body)
    }

    @Delete(":id")
    remove(@Param("id") id: string){
        return this.studentService.deleteStudent(Number(id))
    }
}
