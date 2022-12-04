import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("post")
export class Post {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column()
    body: string
}
