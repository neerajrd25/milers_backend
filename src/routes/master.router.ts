import express from "express";
import MasterController from '../controllers/master.controller';

const router = express.Router();

router.get("/product-users", async (_req, res) => {
    const controller = new MasterController();
    const response = await controller.listProductUsers();
    return res.send(response);
});

router.get("/product-type-categories", async (_req, res) => {
    const controller = new MasterController();
    const response = await controller.listProductTypeCategory();
    return res.send(response);
});

router.get("/categories", async (_req, res) => {
    const controller = new MasterController();
    const response = await controller.listCategory();
    return res.send(response);
});

router.get("/sizes", async (_req, res) => {
    const controller = new MasterController();
    const response = await controller.listSizeMaster();
    return res.send(response);
});

router.get("/suspensions", async (_req, res) => {
    const controller = new MasterController();
    const response = await controller.listSuspensionType();
    return res.send(response);
});

router.get("/brakes", async (_req, res) => {
    const controller = new MasterController();
    const response = await controller.listBrakes();
    return res.send(response);
});

router.get("/materials", async (_req, res) => {
    const controller = new MasterController();
    const response = await controller.listMaterial();
    return res.send(response);
});

export default router