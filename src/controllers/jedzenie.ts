import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Jedzenie } from "../entity/jedzenie";
import { Menu } from "../entity/menu";

const jedzenieRepository = AppDataSource.getRepository(Jedzenie);
const menuRepository = AppDataSource.getRepository(Menu);

export const createJedzenie = async (
  req: Request<{},{},{id_menu: number, ilosc_osob: number}>,
  res: Response,
) => {
  try{
    const {id_menu, ilosc_osob} = req.body;
    await jedzenieRepository.save({
      id_menu,
      ilosc_osob
    })

    return res.status(200).json({
      message: `Successfully created food order`,
      response: await menuRepository.findOne({ where: { id: req.body.id_menu } }),
    })
  } catch (e) {
    console.log(e);
  }
};