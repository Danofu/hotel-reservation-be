import * as jwt from 'jsonwebtoken';

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