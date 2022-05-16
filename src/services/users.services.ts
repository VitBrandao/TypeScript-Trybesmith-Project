import UserModel from '../models/users.model';
import connection from '../models/connection';
import IUser from '../interfaces/user.interface';

class UserServices {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(
    username: string, 
    classe: string, 
    level: number, 
    password: string,
  ): Promise<IUser> {
    return this.model.create(username, classe, level, password);
  }
}

export default UserServices;