import { BikeUsers } from "../models/domain-enums";
import { getRepository} from "typeorm";
import { Brand, Product, ProductDetail } from '../models'
import { ProductType } from '../models/product-type';

export interface IProductPaylod {
  id: number;
  name: string;
  lastUsedValue: number;
  productUser: BikeUsers;
  year: number;
  created?: Date;
  updated?: Date;
  createdBy?: string;
  updatedBy?: string;
  productDetail?: ProductDetail;
  productType: ProductType;
  brand: Brand;
}

export const list = async () :Promise<Array<Product>> => {
  const repo = getRepository(Product);
  return repo.find()
}

export const create  = async (payload: IProductPaylod) :Promise<Product> => {
  const repo = getRepository(Product);
  const obj = new Product();
  console.log(obj);
  return repo.save({
    ...obj,
    ...payload
  })
}

export const getOne  = async (id: number) :Promise<Product | null> => {
  const repo = getRepository(Product);
  const obj = await repo.findOne({id: id})
  if (!obj) return null
  return obj
}
