import { Request, Response } from "express";
import { Pokoj } from "../entity/pokoj";
import { AppDataSource } from "../data-source";
import { Kategorja } from "../entity/kategorja";

const pokojRepository = AppDataSource.getRepository(Pokoj);
const kategorjaRepository = AppDataSource.getRepository(Kategorja);

/**
 * It's endpoint with post Pokoj
 * 
 * @param req Request with body kategorja, ilosc_miejsc, ilosc_mieszkan, dodatkowa_informacja, cena
 * @param res Response with result
 */
export const postPokoj = async (
  req: Request<
    {},
    {},
    {
      kategorja: string;
      ilosc_miejsc: number;
      ilosc_mieszkan: number;
      dodatkowa_informacja: string;
      cena: number;
    }
  >,
  res: Response
): Promise<void> => {
  try {
    const {
      kategorja,
      ilosc_miejsc,
      ilosc_mieszkan,
      dodatkowa_informacja,
      cena,
    } = req.body;

    const result = await kategorjaRepository.save({
      kategorja,
      ilosc_miejsc,
      ilosc_mieszkan,
      dodatkowa_informacja,
      cena,
    });

    await pokojRepository.save({
      id_kategorja: result.id,
    });

    res.status(200).send({
      result,
    });
  } catch (e) {
    console.log(e);
  }
};
