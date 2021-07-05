import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Brakes, Category, MATERIAL, SizeMaster, SuspensionType } from "./domain-enums";
import { Product } from './product';

@Entity()
export class ProductDetail {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    gear!: boolean;
    
    @Column()
    wheelSize!: number;

    @Column({
		type: 'enum',
		enum: Category,
	})
    category!: Category;

    @Column({
		type: 'enum',
		enum: SizeMaster,
        default: SizeMaster.O
	})
    frameSize!: SizeMaster;

    @Column({
		type: 'enum',
		enum: SuspensionType,
        default: SuspensionType.SUSPENSION
	})
    fork?: SuspensionType;

    @Column({
		type: 'enum',
		enum: MATERIAL,
        default: MATERIAL.STEEL
	})
    forkMaterial?: MATERIAL;
    
    @Column({
		type: 'enum',
		enum: Brakes,
        default: Brakes.POWER_V
	})
    frontBrakes?: string;
    
    @Column({
		type: 'enum',
		enum: Brakes,
        default: Brakes.POWER_V
	})
    rearBrakes?: string;

    @Column()
    weight?: number;
    
    @Column()
    crankset?: string;

    @Column()
    frontDerailer?: string;

    @Column()
    rearDerailer?: string;

    @Column()
    shifters!: string
    
    @Column()
    speed!: string

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
    // relations

    @OneToOne(type => Product)
    @JoinColumn()
    product?: Product;
}

