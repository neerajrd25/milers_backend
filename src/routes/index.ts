import express from "express";
import PingController from "../controllers/ping.controller";
import PostRouter from "./post.router";
import UserRouter from "./user.router";
import CommentRouter from "./comment.router";
import BrandRouter from "./brand.router";
import ProductTypeRouter from "./product-type.router";
import ProductRouter from "./product.router";
import AuthRouter from "./auth";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});
router.use("/auth", AuthRouter)
router.use("/users", UserRouter)
router.use("/posts", PostRouter)
router.use("/comments", CommentRouter)
router.use("/brands", BrandRouter)
router.use("/product-types", ProductTypeRouter)
router.use("/products", ProductRouter)

export default router;
