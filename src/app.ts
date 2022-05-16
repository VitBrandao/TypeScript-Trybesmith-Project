import express, { Router } from 'express';
import ProductsController from './controllers/products.controller';
import { nameValidation, amountValidation } from './middlewares/products.middlewares';

const app = express();
export const router = Router();

app.use(express.json());
app.use(router);

const productsController = new ProductsController();

router.get('/products', productsController.getAll);
router.post('/products', nameValidation, amountValidation, productsController.create);
router.post('/users');

export default app;