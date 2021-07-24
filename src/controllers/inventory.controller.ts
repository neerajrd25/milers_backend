import { Body, Get, Path, Route, Tags } from "tsoa";
import { InventoryItem } from '../models/inventory-item';
import { getOne, list, saveItems, updateItems } from '../repositories/inventory.repository';

@Route("inventory-item")
@Tags("InventoryItem")
export default class InventoryController {
  @Get("/")
  public async getAll(): Promise<Array<InventoryItem>> {
    return list()
  }

//   @Post("/")
//   public async createData(@Body() body: IProductPaylod): Promise<Product> {
//     return createProduct(body)
//   }

  @Get("/:id")
  public async getOne(@Path() id: string): Promise<InventoryItem | null> {
    return getOne(Number(id))
  }
  public async createWithDetail(@Body() body: InventoryItem[]): Promise<any> {
    // FIX ME CREATE SKU CODE HERE
    return saveItems(body)
  }

  public async updateItems(@Body() body: InventoryItem, conditon: any): Promise<any> {
    // FIX ME CREATE SKU CODE HERE
    return updateItems(body, conditon);
  }
}