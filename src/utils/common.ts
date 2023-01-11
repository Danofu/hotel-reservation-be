import * as jwt from 'jsonwebtoken';

/**
 * It's a get Encrypted Token
 * 
 * @param email user e-mail
 * @returns token with 30 days valid
 */
export const getEncryptedToken = (email: string) => {
  return jwt.sign(
    {
      email,
    },
    process.env.SECRET_TOKEN_GCP_SECRET,
    {
      expiresIn: '30d',
    },
  );
};