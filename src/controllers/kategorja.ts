import { Request, Response } from "express";
import { Kategorja } from "../entity/kategorja";
import { AppDataSource } from "../data-source";

const kategorjaRepository = AppDataSource.getRepository(Kategorja);

/**
 * It's endpoint with all Pokoj from table Kategorja
 * 
 * @param req Request with no any body or any query
 * @param res Response return all Pokoj from DB
 */
export const getAllPokoj = async (
  req: Request,
  res: Response
) => {
  try{
  const pokoje: Kategorja[] = await kategorjaRepository.find(
    {
      select: {
        id: true,
        kategorja: true,
        ilosc_miejsc: true,
        ilosc_mieszkan: true,
        dodatkowa_informacja: true,
        cena: true,
      }
    }
  )
  res.send(pokoje)
  } catch (e) {
    console.log(e);
  }
}