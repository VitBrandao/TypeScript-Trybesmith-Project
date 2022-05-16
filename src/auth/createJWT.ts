import jwt = require('jsonwebtoken');
import dotenv from 'dotenv';

dotenv.config();

const KEY: string = process.env.JWT_SECRET || 'SecretPlanB1314';

const createJwtToken = (username: string, password: string) => {
  const newToken = jwt.sign({ username, password }, KEY, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return newToken;
};

export default createJwtToken;