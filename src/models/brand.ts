import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./product";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({
        nullable: true
    })
    url?: string;

    @Column({
        unique: true
    })
    code?: string;

    // auditing
	@CreateDateColumn()
	created?: Date;
	@UpdateDateColumn()
	updated?: Date;

	@Column({
		nullable: true
	})
	createdBy?: string;
	@Column({
		nullable: true
	})
	updatedBy?: string;

    @OneToMany(type => Product, product => product.brand)
    products?: Array<Product>
}

