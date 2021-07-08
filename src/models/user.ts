import { IsNotEmpty, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcryptjs";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    email!: string;

    @Column({
        unique: true
    })
    @Length(4, 20)
    username!: string;

    @Column()
    @Length(4, 100)
    password!: string;

    @Column()
    @IsNotEmpty()
    role!: string;

    // @OneToMany(_type => Post, (post: Post) => post.user)
    // posts!: Array<Post>
    // @OneToMany(_type => Comment, (comment: Comment) => comment.user)
    // comments!: Array<Comment>;
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}