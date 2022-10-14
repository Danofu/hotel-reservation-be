import * as jwt from 'jsonwebtoken';
import { keys } from '../config/keys';
import express from 'express';
import { AuthRequest } from '../types';
import { User } from '../models/users';
import { AppDataSource } from '../data-source';
const userRepository = AppDataSource.getRepository(User);

export const checkToken = async (
  req: AuthRequest,
  res: express.Response,
  next: express.NextFunction,
) => {
  const token = req.cookies.access_token;

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
