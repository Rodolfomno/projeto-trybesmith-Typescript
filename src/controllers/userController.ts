import { Request, Response } from 'express';
import UserService from '../service/userService';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;

    const token = await this.userService.createUser(user);

    res.status(201).json({ token });
  };
}