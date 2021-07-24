import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Product} from '../models'
import {list, IProductPaylod, getOne, createProductWithDetail} from '../repositories/product.repository'

@Route("product")
@Tags("Product")
export default class ProductController {
  @Get("/")
  public async getAll(): Promise<Array<Product>> {
    return list()
  }

  @Post("/")
  public async createData(@Body() body: IProductPaylod): Promise<Product> {
    return createProductWithDetail(body)
  }

  @Get("/:id")
  public async getOne(@Path() id: string): Promise<Product | null> {
    return getOne(Number(id))
  }
  @Post("/detail")
  public async createWithDetail(@Body() body: IProductPaylod): Promise<Product> {
    return createProductWithDetail(body)
  }
}