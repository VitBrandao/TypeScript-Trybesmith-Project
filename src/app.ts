import express, { Router } from 'express';
import ProductsController from './controllers/products.controller';

const app = express();
export const router = Router();

app.use(express.json());
app.use(router);

const productsController = new ProductsController();

router.get('/products', productsController.getAll);

export default app;