import { getRepository } from "typeorm";
import { Vendor } from '../models';

export interface IVendorPaylod {
	id: number;
	businessName: string;
	ownerFirstName: string;
	ownerLastName: string;
	address: string;
	pancard: string;
	city: string;
	pincode: string;
	gstNumber: string;
	dateOfEstablishment: Date;
	contact: string;
	active: boolean;
	created?: Date;
	updated?: Date;
	createdBy?: string;
	updatedBy?: string;
}

export const list = async (): Promise<Array<Vendor>> => {
	const repo = getRepository(Vendor);
	return repo.find()
}

export const create = async (payload: IVendorPaylod): Promise<Vendor> => {
	const repo = getRepository(Vendor);
	const obj = new Vendor();
	console.log(obj);
	return repo.save({
		...obj,
		...payload
	})
}

export const getOne = async (id: number): Promise<Vendor | null> => {
	const repo = getRepository(Vendor);
	const obj = await repo.findOne({ id: id })
	if (!obj) return null
	return obj
}
