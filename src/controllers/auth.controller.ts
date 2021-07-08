import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {User} from '../models'
import {getUsers, createUser, IUserPayload, getUser, getUserByUsername} from '../repositories/user.repository'


@Route("auth")
@Tags("Auth")
export default class AuthController {

//   @Post("/change-password")
//   public async login(@Body() body: IUserPayload): Promise<User> {
//     return login(body)
//   }

  @Post("/login")
  public async getUserByUsername(@Body() body: IUserPayload): Promise<User | null> {
    return getUserByUsername(body.username);
  }
}