import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PurchaseHeader } from './purchase-header';
import { Product } from './product';
import { InventoryItem } from './inventory-item';

@Entity()
export class PurchaseLineItem {
    @PrimaryGeneratedColumn()
    id!: number;

    /* Relations */
    @ManyToOne((type) => PurchaseHeader, (header: PurchaseHeader) => header.lineItems)
    // @JoinColumn()
    purchaseHeader!: PurchaseHeader;

    @OneToMany(type => InventoryItem, inventoryItem => inventoryItem.purchaseLineItem)
    inventoryItem!: Array<InventoryItem>

    // relations
    @OneToOne(type => Product)
    @JoinColumn()
    product?: Product;

    /* Relations end */
    @Column()
    description: string

    @Column({
        default: 1
    })
    qty!: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    rate!: number;

    @Column({
        type: 'numeric', precision: 10, scale: 2, default: 0.0
    })
    amount!: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    cGstValue?: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    sGstValue?: number;

    @Column()
    cGstPercentage?: number;

    @Column()
    sGstPercentage?: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    packingCost?: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    distributorCost?: number;

    // not for GST Calculation
    @Column({ type: 'numeric', precision: 10, scale: 2 })
    transportCost?: number;

    /*  auditing */
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

}
