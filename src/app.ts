import express, { Router } from 'express';
import ProductsController from './controllers/products.controller';
import validateProduct from './middlewares/products.middlewares';

const app = express();
export const router = Router();

app.use(express.json());
app.use(router);

const productsController = new ProductsController();

router.get('/products', productsController.getAll);
router.post('/products', validateProduct, productsController.create);

export default app;