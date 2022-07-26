import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as IProduct[];
  }

  public async create(name: string, amount: string): Promise<IProduct> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: result.insertId, name, amount };
  }
}

export default ProductModel;