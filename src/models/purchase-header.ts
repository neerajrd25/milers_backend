import { Column, CreateDateColumn, Entity, ManyToOne,OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Vendor } from './vendor';
import { PurchaseLineItem } from './purchase-line-item';

@Entity()
export class PurchaseHeader {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    invoiceNumber : string
    
    @Column()
    invoiceDate: Date;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    billTotal?: number;
    
    @Column({ type: 'numeric', precision: 10, scale: 2, default: 0.0 })
    discountTotal?: number;
    
    @Column({ type: 'numeric', precision: 10, scale: 2 })
    packingTotal?: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    distributorTotal?: number;

    // not for GST Calculation
    @Column({ type: 'numeric', precision: 10, scale: 2 })
    transportTotal?: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    cGstTotal?: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    sGstTotal?: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    roundOff?: number;

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

    /* Relations */
	@ManyToOne((type) => Vendor, (vendor: Vendor) => vendor.vouchers)
	// @JoinColumn()
	vendor!: Vendor;

    @OneToMany(type => PurchaseLineItem, lineItems => lineItems.purchaseHeader)
    lineItems?: Array<PurchaseLineItem>
}

