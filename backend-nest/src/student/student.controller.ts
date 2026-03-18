import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import type { student } from './student.service';


@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    getAll() {
        return this.studentService.getAllStudent()
    }

    @Get(":id")
    getOne(@Param("id") id: string) {
        return this.studentService.getStudentById(Number(id))
    }

    @Post()
    create(@Body() body: student) {
        return this.studentService.createStudent(body)
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() body: student){
        return this.studentService.updateStudent(Number(id), body)
    }
}
