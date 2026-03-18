import { Controller, Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    getAllStudents(){
        return this.studentService.getAllStudent()
    }

    @Get(":id")
    getStudentById(@Param("id") id: string) {
        return this.studentService.getStudentById(Number(id))
    }
}
