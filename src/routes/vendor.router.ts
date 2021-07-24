import express from "express";
import VendorController from '../controllers/vendor.controller';

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new VendorController();
  const response = await controller.getAll();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new VendorController();
  console.log(req.body);
  try {
    const response = await controller.createData(req.body);
    return res.send(response);

  } catch ({code, message}) {
    res.statusCode= 400
    return res.send({code, message});
  }
});

router.get("/:id", async (req, res) => {
  const controller = new VendorController();
  const response = await controller.getOne(req.params.id);
  if (!response) res.status(404).send({message: "No data found"})
  return res.send(response);
});

export default router