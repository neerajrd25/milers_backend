import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {ProductType} from '../models'
import {list, create, IProductType, getOne} from '../repositories/product-type.repository'

@Route("product-types")
@Tags("ProductType")
export default class ProductTypeController {
  @Get("/")
  public async getAll(): Promise<Array<ProductType>> {
    return list()
  }

  @Post("/")
  public async createData(@Body() body: IProductType): Promise<ProductType> {
    return create(body)
  }

  @Get("/:id")
  public async getOne(@Path() id: string): Promise<ProductType | null> {
    return getOne(Number(id))
  }
}