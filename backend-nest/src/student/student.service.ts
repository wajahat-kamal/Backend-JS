import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    private student = [
        {id: 1, name: "Wajahat", age: 16},
        {id: 2, name: "Kamal", age: 17},
        {id: 3, name: "Khan", age: 18},
    ]

    getAllStudent(){
        return this.student
    }

    getStudentById(id: number){
        return this.student.find((st) => st.id === id)
    }

    
}
