import ProductModel from '../models/products.model';
import connection from '../models/connection';
import IProduct from '../interfaces/product.interface';

class ProductServices {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(name: string, amount: string): Promise<IProduct> {
    return this.model.create(name, amount);
  }
}

export default ProductServices;