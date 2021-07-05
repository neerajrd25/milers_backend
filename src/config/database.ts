import { ConnectionOptions } from 'typeorm'
import { User, Post, Comment, Brand, Product, ProductType, ProductDetail } from '../models'

const config: ConnectionOptions = {
  type: "mysql",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 3306,
  username: process.env.POSTGRES_USER || "root",
  password: process.env.POSTGRES_PASSWORD || "root",
  database: process.env.POSTGRES_DB || "palghar_milers_dev",
  entities: [User, Post, Comment, Brand, ProductType, Product, ProductDetail],
  synchronize: true,
}

export default config