import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductServices from '../services/products.services';

class ProductsController {
  constructor(private productService = new ProductServices()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(StatusCodes.OK).json(products);
  };
}

export default ProductsController;