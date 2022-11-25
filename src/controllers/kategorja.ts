import { Request, Response } from "express";
import { Kategorja } from "../entity/kategorja";
import { AppDataSource } from "../data-source";

const kategorjaRepository = AppDataSource.getRepository(Kategorja);

export const getAllPokoj = async (
  req: Request,
  res: Response
) => {
  try{
  const pokoje: Kategorja[] = await kategorjaRepository.find(
    {
      select: {
        kategorja: true,
        iloscMiejsc: true,
        iloscMieszkan: true,
        dodatkowaInformacja: true,
        cena: true,
      }
    }
  )
  res.send(pokoje)
  } catch (e) {
    console.log(e);
  }
}