import { ProductTypeCategory } from './domain-enums';
import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Product } from './product';

@Entity()
export class ProductType {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({
		unique: true,
	})
	name!: string;

	@Column({
		type: 'enum',
		enum: ProductTypeCategory,
		default: ProductTypeCategory.BIKES,
	})
	productTypeCategory!: ProductTypeCategory;

	@OneToMany(_type => Product, product => product.brand)
    products?: Array<Product>

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
    updatedBy?: string
    
}
