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
        if (!data.age || !data.name) return;
        const newObj = {
            id: Date.now(),
            name,
            age,
        }
        this.student.push(newObj) 
    }
}
