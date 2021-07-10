import { ConnectionOptions } from 'typeorm'
import { User, Post, Comment, Brand, Product, ProductType, ProductDetail, Company, Vendor, PurchaseLineItem } from '../models'
import { FinancialYear } from '../models/financial-year';
import { PurchaseHeader } from '../models/purchase-header';
import { InventoryItem } from '../models/inventory-item';

const config: ConnectionOptions = {
  type: "mysql",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 3306,
  username: process.env.POSTGRES_USER || "root",
  password: process.env.POSTGRES_PASSWORD || "root",
  database: process.env.POSTGRES_DB || "palghar_milers_dev",
  entities: [
    User, Post, Comment, Brand, ProductType,
    Product, ProductDetail, Company, FinancialYear, PurchaseHeader, Vendor, PurchaseLineItem, InventoryItem
  ],
  synchronize: true,
}

export default config