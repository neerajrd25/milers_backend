import { ProductTypeCategory } from "src/models/domain-enums";
import { getRepository} from "typeorm";
import { ProductType } from '../models'

export interface IProductType {
  id: number;
  name: string;
  productTypeCategory: ProductTypeCategory;
  created?: Date;
  updated?: Date;
  createdBy?: string;
  updatedBy?: string;
}

export const list = async () :Promise<Array<ProductType>> => {
  const repo = getRepository(ProductType);
  return repo.find()
}

export const create  = async (payload: IProductType) :Promise<ProductType> => {
  const repo = getRepository(ProductType);
  const obj = new ProductType();
  console.log(obj);
  return repo.save({
    ...obj,
    ...payload
  })
}

export const getOne  = async (id: number) :Promise<ProductType | null> => {
  const repo = getRepository(ProductType);
  const obj = await repo.findOne({id: id})
  if (!obj) return null
  return obj
}
