import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/user";

const userRepository = AppDataSource.getRepository(User);

export const getAllusers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await AppDataSource.manager.query(`
      SELECT * from public.users`);

    res.status(200).send({
      result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getUserById = async (
  req: Request<{}, {}, {}, { id: string }>,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.query;

    const user = await userRepository.find({ where: { id: parseInt(id) } });

    res.status(200).send({
      user,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getUserByToken = async (
  req: Request,
  res: Response
): Promise<void> => {

    res.status(200).send({
      user: req.user,
    });
};
