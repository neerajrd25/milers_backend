import express from "express";
import { User } from "../models/user";
import AuthController from "../controllers/auth.controller";
import * as jwt from "jsonwebtoken";
import appConfig from "../config/app.config";

const router = express.Router();

router.post("/login", async (req, res) => {
    console.log(req.body);
    let { username, password } = req.body;
    let user = new User();
    user.username = username;
    user.password = password;
    user.hashPassword();
    console.log(user);

    const controller = new AuthController();

    let dbUser: User | null = new User();
    try {
        dbUser = await controller.getUserByUsername(user);    
    } catch (error) {
        res.status(401).send(error);
        return;
    }
    if (!dbUser){
        res.status(401).send({error: 'wrong cred'});
        return;
    }
    // /Check if encrypted password match
    
    if (!dbUser!.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send({token: null, error: 'Wrong credentials'});
      return;
    }
    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
        { userId: user.id, username: user.username },
        appConfig.jwtSecret,
        { expiresIn: "1h" }
      );

    return res.send({token});
});

export default router