import { IsInt, IsString } from "class-validator"

export class StudentDTO {
    @IsString()
    name: string
    @IsInt()
    age: number
}