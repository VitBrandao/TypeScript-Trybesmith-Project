import ProductModel from '../models/products.model';
import connection from '../models/connection';
import Product from '../interfaces/product.interface';

class ProductServices {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductServices;