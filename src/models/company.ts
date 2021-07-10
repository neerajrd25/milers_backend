import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./product";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    ownerFirstName?: string;
    @Column()
    ownerLastName?: string;

    @Column()
    address?: string;

    @Column()
    city?: string;

    @Column()
    state?: string;

    @Column()
    pincode?: string;

    @Column()
    gstNumber?: string;

    @Column()
    dateOfEstablishment?: Date;

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

    // @OneToMany(type => Product, product => product.brand)
    // products?: Array<Product>
}

