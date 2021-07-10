import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./product";
import { PurchaseHeader } from './purchase-header';

@Entity()
export class Vendor {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    businessName!: string;

    @Column()
    ownerFirstName?: string;
    @Column()
    ownerLastName?: string;

    @Column()
    address?: string;

    @Column({
        nullable: true
    })
    pancard?: string;

    @Column()
    city?: string;

    @Column()
    pincode?: string;

    @Column()
    gstNumber?: string;

    @Column()
    dateOfEstablishment?: Date;

    @Column()
    contact!: string;

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

    
    @OneToMany(type => PurchaseHeader, vouchers => vouchers.vendor)
    vouchers?: Array<Product>
}

