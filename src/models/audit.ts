import { CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

export class Audit {
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
}
