import express from "express";
import { User } from "../models/user";
import UserController from "../controllers/user.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new UserController();
  const response = await controller.getUsers();
  return res.send(response);
});

router.post("/", async (req, res) => {
  let { username, password, role, firstName, lastName, email } = req.body;
  let user = new User();
  user.username = username;
  user.password = password;
  user.role = role;
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.hashPassword();

  console.log(user)
  const controller = new UserController();
  
  const response = await controller.createUser(user);
  console.log('Res', response)
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new UserController();
  const response = await controller.getUser(req.params.id);
  if (!response) res.status(404).send({message: "No user found"})
  return res.send(response);
});

export default router