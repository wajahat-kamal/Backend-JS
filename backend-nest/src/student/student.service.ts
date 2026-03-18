import { Injectable, NotFoundException } from '@nestjs/common';

type student = { name: string, age: number }

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: "Wajahat", age: 16 },
        { id: 2, name: "Kamal", age: 17 },
        { id: 3, name: "Khan", age: 18 },
    ]

    // GET
    getAllStudent() {
        return this.students
    }

    getStudentById(id: number) {
        const student = this.students.find((st) => st.id === id)
        if (!student) throw new NotFoundException("Student not found")
        return student
    }

    // POST
    createStudent(data: student) {
        const newStudent = {
            id: Date.now(),
            ...data
        }
        this.students.push(newStudent)
        return newStudent;
    }

    // PUT
    updateStudentAllData(id: number, data: student) {
        const index = this.students.findIndex((st) => st.id === id)
        if (index === -1) throw new NotFoundException("Student not found")
        const updateStudent = this.students[index] = { id, ...data }
        return updateStudent
    }

    // PATCH
    patchStudent(id: number, data: Partial<student>) {
        const student = this.getStudentById(id)
        Object.assign(student, data)
        return student
    }

    // DELETE
    deleteStudent(id: number) {
        const index = this.students.findIndex((s) => s.id === id)
        if (index === -1) throw new NotFoundException("Student not found")
        const deleted = this.students.splice(index, 1)
        return { message: "Message Deleted", student: deleted[0]}
    }
}
