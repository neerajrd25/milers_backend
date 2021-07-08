import "reflect-metadata";
import {createConnection} from "typeorm";
import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import helmet from "helmet";
import cors from "cors";
import Router from "./routes";
import dbConfig from './config/database'

const PORT = process.env.PORT || 8000;

const app: Application = express();
// Call midlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(Router);
console.log('Something')
createConnection(dbConfig).then(_connection => {
  // console.log(_connection)
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
}).catch(err => {
  console.log("Unable to connect to db", err);
  process.exit(1)
})

