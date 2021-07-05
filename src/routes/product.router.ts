import express from "express";
import ProductController from '../controllers/product-type.controller';

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new ProductController();
  const response = await controller.getAll();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new ProductController();
  console.log(req.body);
  const response = await controller.createData(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new ProductController();
  const response = await controller.getOne(req.params.id);
  if (!response) res.status(404).send({message: "No data found"})
  return res.send(response);
});

export default router