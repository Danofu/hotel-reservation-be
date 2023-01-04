import { Request, Response} from "express";
import { AppDataSource } from "../data-source";
import { Menu } from "../entity/menu";

const menuRepository = AppDataSource.getRepository(Menu);

export const postJedzenie = async (
  req: Request<{}, {}, { nazwa: string, kalorycznosc: number, cena: number }>,
  res: Response
): Promise<void> => {
  try {
    const { nazwa, kalorycznosc, cena } = req.body;

    const menu = await menuRepository.save({
      nazwa,
      kalorycznosc,
      cena
    });

    res.status(200).send({
      menu,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getJedzenie = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {

    const menu = await menuRepository.find({
      select: {
        id: true,
        nazwa: true,
        kalorycznosc: true,
        cena: true
      }
    });

    res.status(200).send({
      menu,
    });
  } catch (e) {
    console.log(e);
  }
};