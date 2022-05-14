import { NextFunction, Request, Response } from 'express';
import Product from '../interfaces/product.interface';

type Message = {
  message: string;
};

function doesNameExists(name: string) {
  if (!name || name.length === 0 || name === undefined) return { message: '"name" is required' };
}

function validateName(name: string) {
  const notValid = doesNameExists(name);
  if (notValid?.message) return notValid;

  if (typeof name !== 'string') return { message: '"name" must be a string' };

  if (name.length < 3) return { message: '"name" length must be at least 3 characters long' };
}

function doesAmountExists(amount:string) {
  if (!amount || amount.length === 0 || amount === undefined) {
    return { message: '"amount" is required' };
  }
}

function validateAmount(amount:string) {
  const notValid = doesAmountExists(amount);
  if (notValid?.message) return notValid;

  if (typeof amount !== 'string') return { message: '"amount" must be a string' };

  if (amount.length < 3) return { message: '"amount" length must be at least 3 characters long' };
}

function errorMessageCode(errorMessage: Message) {
  if (errorMessage.message.includes('required')) {
    return 400;
  }
  return 422;
}

function validateProduct(req: Request, res: Response, next: NextFunction) {
  const product: Product = req.body;

  const { name, amount } = product;

  const nameValidation = validateName(name);
  if (nameValidation?.message) {
    const errorCode = errorMessageCode(nameValidation);
    return res.send(errorCode).json(nameValidation);
  }

  const amountValidation = validateAmount(amount);
  if (amountValidation?.message) {
    const errorCode = errorMessageCode(amountValidation); 
    return res.send(errorCode).json(amountValidation);
  }

  next();
}

export default validateProduct;