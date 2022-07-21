import { Pool, ResultSetHeader } from 'mysql2/promise';
import createJwtToken from '../auth/createJWT';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(
    username: string, 
    classe: string, 
    level: number, 
    password: string,
  ): Promise<string> {
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    
    const newToken = createJwtToken(username, password);
    return newToken;
  }
}

export default UserModel;