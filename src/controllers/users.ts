import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/user";


const userRepository = AppDataSource.getRepository(User);

export interface CreateUserRequestDTO {
  password: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface UpdateUserRequestDTO extends CreateUserRequestDTO {
  id: number;
}


export const getAllusers = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await AppDataSource.manager.query(`
      SELECT * from public.users`);

    res.status(200).send({
      result
    })

  } catch (e) {
    console.log(e);
  }
}

export const getUserById = async (req: Request<{},{},{},{id: string}>, res: Response): Promise<void> => {
  try {
    const{ id } = req.query

    const user = await userRepository.find({where: {id: parseInt(id)}});

    res.status(200).send({
      user
    })

  } catch (e) {
    console.log(e);
  }
};

//edit data for user
export const edit = async (
  req: Request<{}, {}, UpdateUserRequestDTO>,
  res: Response
) => {
  try {
    const user = await userRepository.findOne({
      where: { id: req.body.id },
    });

    if (!user) {
      return res.status(400).json({
        message: 'There is no such user',
      });
    }

    await userRepository.save({
      ...req.body,
    });

    return res.status(200).json({
      message: `Successfully Updated User: ${user.first_name}`,
      response: await userRepository.findOne({ where: { id: req.body.id } }),
    })
  } catch (e) {
    console.log(e);
  }
};