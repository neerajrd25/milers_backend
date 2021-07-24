import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Vendor} from '../models'
import {list, create, IVendorPaylod, getOne} from '../repositories/vendor.repository'

@Route("vendors")
@Tags("Vendors")
export default class VendorController {
  @Get("/")
  public async getAll(): Promise<Array<Vendor>> {
    return list()
  }

  @Post("/")
  public async createData(@Body() body: IVendorPaylod): Promise<Vendor> {
    return create(body)
  }

  @Get("/:id")
  public async getOne(@Path() id: string): Promise<Vendor | null> {
    return getOne(Number(id))
  }
}