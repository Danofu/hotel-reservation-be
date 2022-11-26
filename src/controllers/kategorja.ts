import { Request, Response } from "express";
import { Kategorja } from "../entity/kategorja";
import { AppDataSource } from "../data-source";

const kategorjaRepository = AppDataSource.getRepository(Kategorja);

//get all rooms from DB hotel
export const getAllPokoj = async (
  req: Request,
  res: Response
) => {
  try{
  const pokoje: Kategorja[] = await kategorjaRepository.find(
    {
      select: {
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