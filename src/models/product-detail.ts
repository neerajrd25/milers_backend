import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Brakes, Category, Material, SizeMaster, SuspensionType } from "./domain-enums";
import { Product } from './product';
import { BikeUsers } from './domain-enums';

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
        default: SuspensionType.RIGID,
        nullable: true,
    })
    fork?: SuspensionType;

    @Column({
        type: 'enum',
        enum: Material,
        default: Material.STEEL
    })
    forkMaterial?: Material;

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

    @Column({
		type: 'enum',
		enum: BikeUsers,
		default: BikeUsers.MEN
	})
	productUser!: BikeUsers;

    @Column({
        nullable: true,
        type: 'numeric', precision: 5, scale: 2 
    })
    weight?: number;

    @Column({
        nullable: true,
    })
    crankset?: string;

    @Column({
        nullable: true,
    })
    frontDerailer?: string;

    @Column({
        nullable: true,
    })
    rearDerailer?: string;

    @Column({
        nullable: true,
    })
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

