import { Request, Response } from "express";
import { getEncryptedToken } from "../utils/common";
import { AppDataSource } from "../data-source";
import { User } from "../entity/user";
import * as bycrypt from 'bcryptjs';

const userRepository = AppDataSource.getRepository(User);

//function of validation
const validate = (email: string, password: string) => {
  let message = null;
  let isValidated = false;

  if (!email) {
    message = 'Email is required';
    return { message, isValidated };
  }

  if (!password) {
    message = 'Password is required';
    return { message, isValidated };
  }

  return { message, isValidated: true };
};

//registration users in hotel database
export const register = async (
  req: Request<
    {},
    {},
    {
      password: string;
      first_name: string;
      last_name: string;
      email: string;
    }
  >,
  res: Response,
) => {
  try {
    const { password, first_name, last_name, email } = req.body;

    const user = await userRepository.findOne({ where: { email } });

    if (user) {
      return res.status(403).json({
        message: `${email} User already exists`,
      });
    }

    const salt = bycrypt.genSaltSync(10);
    const encryptPass = bycrypt.hashSync(password, salt);
    const token = getEncryptedToken(email);

    await userRepository.save({
      first_name,
      last_Name: last_name,
      password: encryptPass,
      access_token: token,
      email,
    });

    res
      .status(200)
      .json({ message: 'User registered successfully' });
  } catch (e) {
    throw (e);
  }
};

//authentification users in hotel database
export const login = async (
  req: Request<{}, {}, { email: string; password: string }>,
  res: Response,
) => {
  try {
    const email: string = req.body.email.toLowerCase();
    const password: string = req.body.password;
    const { message, isValidated } = validate(email, password);

    if (!isValidated) {
      return res.status(400).json({
        message,
      });
    }

    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        message: 'Incorrect email or password.',
      });
    }

    const passwordResult = bycrypt.compareSync(password, user.password);

    if (!passwordResult) {
      return res.status(400).json({
        message: 'Incorrect email or password.',
      });
    }

    const token = getEncryptedToken(user.email);

    await userRepository.save({ id: user.id, access_token: token });

    return res.send({ token, message: 'Logged in successfully' });
  } catch (e) {
   throw e;
  }
};