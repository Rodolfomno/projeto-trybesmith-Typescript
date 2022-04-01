import IUser from '../interfaces/IUser';
import connection from '../models/connection';
import UserModel from '../models/userModel';
import jwtGenerator from '../util/jwtGenerator';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user: IUser): Promise<string> {
    const newUser = await this.model.createUser(user);
    const token = jwtGenerator({ data: newUser.id });

    return token;
  }
}