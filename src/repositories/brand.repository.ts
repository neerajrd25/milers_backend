import { getRepository} from "typeorm";
import { Brand } from '../models'

export interface IBrandPaylod {
  id: number;
  name: string;
  code: string
  url: string;
  created?: Date;
  updated?: Date;
  createdBy?: string;
  updatedBy?: string;
}

export const list = async () :Promise<Array<Brand>> => {
  const repo = getRepository(Brand);
  return repo.find()
}

export const create  = async (payload: IBrandPaylod) :Promise<Brand> => {
  const repo = getRepository(Brand);
  const obj = new Brand();
  console.log(obj);
  return repo.save({
    ...obj,
    ...payload
  })
}

export const getOne  = async (id: number) :Promise<Brand | null> => {
  const repo = getRepository(Brand);
  const obj = await repo.findOne({id: id})
  if (!obj) return null
  return obj
}
