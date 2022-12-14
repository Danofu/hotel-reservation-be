import { Request, Response } from "express";
import { Pracowniki } from "../entity/pracowniki";
import { AppDataSource } from "../data-source";
import { Stanowisko } from "../entity/stanowisko";

const pracownikRepository = AppDataSource.getRepository(Pracowniki);
const stanowiskoRepository = AppDataSource.getRepository(Stanowisko);

export const postPracownik = async (
  req: Request<
    {},
    {},
    {
      imie: string;
      nazwisko: string;
      pensja: number;
      wyksztalcenie: string;
      data_urodzenia: Date;
      stanowisko: string;
    }
  >,
  res: Response
): Promise<void> => {
  try {
    const {
      imie,
      nazwisko,
      pensja,
      wyksztalcenie,
      data_urodzenia,
      stanowisko,
    } = req.body;

    const position = await stanowiskoRepository.save({
      stanowisko,
    });

    const employee = await pracownikRepository.save({
      imie,
      nazwisko,
      pensja,
      wyksztalcenie,
      data_urodzenia,
      id_stanowisko: position.id,
    });

    res.status(200).send({
      employee,
    });
  } catch (e) {
    console.log(e);
  }
};
