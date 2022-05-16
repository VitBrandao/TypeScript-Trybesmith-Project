import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserServices from '../services/users.services';

class UserController {
  constructor(private userServices = new UserServices()) { }
  
  public create = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    const newUser = await this.userServices.create(username, classe, level, password);
    res.status(StatusCodes.CREATED).json({ token: newUser });
  };
}

export default UserController;