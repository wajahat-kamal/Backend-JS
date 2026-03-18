import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private student = [
        { id: 1, name: "Wajahat", age: 16 },
        { id: 2, name: "Kamal", age: 17 },
        { id: 3, name: "Khan", age: 18 },
    ]

    // GET
    getAllStudent() {
        return this.student
    }

    getStudentById(id: number) {
        const student = this.student.find((st) => st.id === id)
        if (!student) throw new NotFoundException("Student not found")
        return student
    }

    // POST
    createStudent(data: { name: string, age: number }) {
        const newStudent = {
            id: Date.now(),
            ...data
        }
        this.student.push(newStudent)
        return newStudent;
    }

    // PUT
    updateStudentAllData(id: number, data: { name: string, age: number }) {
        const index = this.student.findIndex((st) => st.id === id)
        if (index === -1) throw new NotFoundException("Student not found")
        const updateStudent = this.student[index] = { id, ...data }
        return updateStudent
    }
}
