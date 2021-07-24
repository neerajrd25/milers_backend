import { getConnection, getRepository } from "typeorm";
import { Product, ProductDetail, PurchaseLineItem } from '../models';
import { InventoryItem } from '../models/inventory-item';

export interface IInventoryItem {
  id: number;
  skuCode: string;
  qty?: number;
  status?: string;
  mrp?: number;
  created?: Date;
  updated?: Date;
  createdBy?: string;
  updatedBy?: string;
  product?: Product;
  purchaseLineItem: PurchaseLineItem;

}

export const list = async (): Promise<Array<InventoryItem>> => {
  const repo = getRepository(InventoryItem);
  return repo.find()
}

export const getOne = async (id: number): Promise<InventoryItem | null> => {
  const repo = getRepository(InventoryItem);
  const obj = await repo.findOne({ id: id })
  if (!obj) return null
  return obj
}

export const saveItems = async (items: IInventoryItem[]): Promise<any> => {
  const repo = getRepository(InventoryItem);
  return repo.save(items);

}

export const updateItems = async (item: InventoryItem, conditon: any): Promise<any> => {
  const connection = getConnection()
  return connection
    .createQueryBuilder()
    .update(InventoryItem)
    .set(item)
    .where(conditon)
    .execute()

}
