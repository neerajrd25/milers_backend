import { BikeUsers, Brakes, Category, Material, ProductTypeCategory, SizeMaster, SuspensionType } from "../models/domain-enums";
import { Get, Route, Tags } from "tsoa";

@Route("masters")
@Tags("Master")
export default class MasterController {

    @Get("/product-users")
    public async listProductUsers(): Promise<Array<any>> {
        const list = MasterController.toArray(BikeUsers);
        return list;
    }
    @Get("/product-type-categories")
    public async listProductTypeCategory(): Promise<Array<any>> {
        const list = MasterController.toArray(ProductTypeCategory);
        return list;
    }
    
    @Get("/categories")
    public async listCategory(): Promise<Array<any>> {
        const list = MasterController.toArray(Category);
        return list;
    }
    @Get("/sizes")
    public async listSizeMaster(): Promise<Array<any>> {
        const list = MasterController.toArray(SizeMaster);
        return list;
    }
    @Get("/suspensions")
    public async listSuspensionType(): Promise<Array<any>> {
        const list = MasterController.toArray(SuspensionType);
        return list;
    }

    @Get("/brakes")
    public async listBrakes(): Promise<Array<any>> {
        const list = MasterController.toArray(Brakes);
        return list;
    }

    @Get("/materials")
    public async listMaterial(): Promise<Array<any>> {
        const list = MasterController.toArray(Material);
        return list;
    }

    public static toArray(enums: any) {
        const arrayObjects = []
        for (const [propertyKey, propertyValue] of Object.entries(enums)) {
            if (!Number.isNaN(Number(propertyKey))) {
                continue;
            }
            arrayObjects.push({ id: propertyValue, name: propertyKey });
        }
        return arrayObjects
    }
}