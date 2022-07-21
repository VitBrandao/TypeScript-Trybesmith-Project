// import jwt = require('jsonwebtoken');
// import dotenv from 'dotenv';

// dotenv.config();

// const KEY: string = process.env.JWT_SECRET || 'SecretPlanB1314';

// const validateJWT = (token: string) => {
//   if (!token) return { message: 'Token not found' };
  
//   jwt.verify(token, KEY, (err) => {
//     let notAuthorized: boolean;
//     if (err) notAuthorized = true;
//   });

//   if (notAuthorized === true) return { message: 'Expired or invalid token' };

//   return 'Authorized!';
// };

// export default validateJWT;