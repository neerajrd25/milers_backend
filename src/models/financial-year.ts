import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn } from "typeorm";

@Entity()
export class FinancialYear {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    startDate!: Date;

    @Column()
    endDate!: Date;
}