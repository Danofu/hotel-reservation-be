import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Menu } from "../entity/menu";

const menuRepository = AppDataSource.getRepository(Menu);

export const showMenu = async (
  req: Request,
  res: Response,
) => {
  try{
    const menu = await menuRepository.find({
      select: {
        id: true,
        nazwa: true,
        kalorycznosc: true,
        cena: true,
      }
    });

    res.send(menu);
  } catch (e) {
    console.log(e);
  }
};