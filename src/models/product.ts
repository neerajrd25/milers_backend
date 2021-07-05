import { BikeUsers } from './domain-enums';
import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Brand } from '.';
import { ProductType } from './product-type';
import { ProductDetail } from './product-detail';

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
	id!: number;
	// this is for SKU code
	@Column({
		default: 0,
	})
	
	@Column()
	name!: string;

	lastUsedValue!: number;

	@Column({
		type: 'enum',
		enum: BikeUsers,
		default: BikeUsers.MEN
	})
	productUser!: BikeUsers;

	@Column()
	year!: number;

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

	// Relations
	@ManyToOne((type) => Brand, (brand: Brand) => brand.products)
	// @JoinColumn()
	brand!: Brand;

	@ManyToOne((type) => ProductType, (productType: ProductType) => productType.products)
	// @JoinColumn()
	productType!: ProductType;


	@OneToOne(type => ProductDetail, productDetail => productDetail.product)
	productDetail?: ProductDetail;

}
