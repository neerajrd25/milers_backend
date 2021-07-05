import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Brand} from '../models'
import {list, create, IBrandPaylod, getOne} from '../repositories/brand.repository'

@Route("brands")
@Tags("Brand")
export default class BrandController {
  @Get("/")
  public async getAll(): Promise<Array<Brand>> {
    return list()
  }

  @Post("/")
  public async createData(@Body() body: IBrandPaylod): Promise<Brand> {
    return create(body)
  }

  @Get("/:id")
  public async getOne(@Path() id: string): Promise<Brand | null> {
    return getOne(Number(id))
  }
}