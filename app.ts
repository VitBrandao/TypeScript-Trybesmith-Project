import express, { Router } from 'express';
import ProductsController from './controllers/products.controller';
import UserController from './controllers/users.controller';
import OrderController from './controllers/orders.controller';
import { nameValidation, amountValidation } from './middlewares/products.middlewares';
import UserValidation from './middlewares/users.middlewares';

const app = express();
export const router = Router();

app.use(express.json());
app.use(router);

const productsController = new ProductsController();
const userVal = new UserValidation();
const userController = new UserController();
const orderController = new OrderController();

router.get('/products', productsController.getAll);
router.post('/products', nameValidation, amountValidation, productsController.create);

router.post(
  '/users', 
  userVal.usernameValidation, 
  userVal.classeValidation,
  userVal.levelValidation,
  userVal.passwordValidation,
  userController.create,
);

router.get('/orders', orderController.getAll);

export default app;