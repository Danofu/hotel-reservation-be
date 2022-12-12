import * as jwt from 'jsonwebtoken';
import { keys } from '../config/keys';
import express from 'express';
import { Request } from 'express';
import { User } from '../entity/user';
import { AppDataSource } from '../data-source';
const userRepository = AppDataSource.getRepository(User);

export interface AuthRequest extends Request {
  user: User;
}

export const checkToken = async (
  req: AuthRequest,
  res: express.Response,
  next: express.NextFunction,
) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    // @TODO: consider refreshing token over here
    const data = jwt.verify(token, keys.SECRET_TOKEN);

    const user = await userRepository.findOne({
      where: { email: (data as any).email },
    });

    (req as any).user = user;

    return next();
  } catch {
    return res.sendStatus(401);
  }
};
