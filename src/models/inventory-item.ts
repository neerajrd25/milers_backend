import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PurchaseHeader } from './purchase-header';
import { Product } from './product';
import { ProductStatus } from "./domain-enums";
import { PurchaseLineItem } from "./purchase-line-item";

@Entity()
export class InventoryItem {
    @PrimaryGeneratedColumn()
    id!: number;

    /* Relations */
    @ManyToOne((type) => PurchaseLineItem, (purchaseLineItem: PurchaseLineItem) => purchaseLineItem.inventoryItem)
    // @JoinColumn()
    purchaseLineItem!: PurchaseLineItem;

    
    // relations
    @OneToOne(type => Product)
    @JoinColumn()
    product?: Product;

    /* Relations end */

    @Column()
    skuCode!: string

    @Column({
        default: 1
    })
    qty!: number;

    @Column({
        type: 'enum',
        enum: ProductStatus,
        default: ProductStatus.IN_SHIPMENT
    })
    status?: string;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    mrp !: number;

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
