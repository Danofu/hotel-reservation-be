import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Jedzenie } from "../entity/jedzenie";
import { Menu } from "../entity/menu";
import { Pokoj } from "../entity/pokoj";
import { Rezerwacja } from "../entity/rezerwacja";

const rezerwacjaRepository = AppDataSource.getRepository(Rezerwacja);
const pokojRepository = AppDataSource.getRepository(Pokoj);
const menuRepository = AppDataSource.getRepository(Menu);
const jedzenieRepository = AppDataSource.getRepository(Jedzenie);

/**
 * Main controller with post rezerwation
 * 
 * @param req Request with body id_pokoj, id_user, check_in, check_out and optional menu
 * @param res Response with message: "Reservation success!"
 */

export const rezarwacja = async (
  req: Request<
    {},
    {},
    {
      id_pokoj: number;
      id_user: number;
      check_in: Date;
      check_out: Date;
      menu?: number[];
    }
  >,
  res: Response
) => {
  try {
    const { id_pokoj, id_user, check_in, check_out } = req.body;
    const pokoj: Pokoj = await pokojRepository.findOne({
      where: {
        id: id_pokoj,
      },
      relations: {
        kategorja: true,
      },
    });

    const sumDay: number = Math.ceil(
      Math.abs(new Date(check_in).getTime() - new Date(check_out).getTime()) /
        (1000 * 3600 * 24)
    );

    let suma: number = pokoj.kategorja.cena * sumDay;

    const rezerwacja = await rezerwacjaRepository.save({
      id_pokoj,
      id_pracownika: 1,
      id_user,
      data_rezerwacji: new Date(),
      check_in,
      check_out,
      suma: suma,
    });

    if (req.body.menu) {
      req.body.menu.map(async (id) => {
        const menu: Menu = await menuRepository.findOne({
          where: {
            id: id,
          },
        });

        suma += menu.cena;

        await rezerwacjaRepository.update(
          { id: rezerwacja.id },
          { suma: suma }
        );

        await jedzenieRepository.save({
          id_rezerwacji: rezerwacja.id,
          id_menu: menu.id,
          ilosc_osob: pokoj.kategorja.ilosc_miejsc,
        });
      });
    }

    res.send({ message: "Reservation success!" });
  } catch (e) {
    console.log(e);
  }
};

/**
 * Controller that get all rezerwation from table public.rezerwacja in posgreSQL
 * 
 * @param req Request with query id_user
 * @param res Response return all rezerwations by user_id
 */

export const getAllRezerwation = async (
  req: Request<{}, {}, {}, { id_user: string }>,
  res: Response
) => {
  try {
    const { id_user } = req.query;
    const reserwacja = await rezerwacjaRepository.find({
      where: { id_user: parseInt(id_user) },
      relations: {
        pokoj: {
          kategorja: true,
        },
        jedzenie: {
          menu: true,
        },
      },
    });
    res.send(reserwacja);
  } catch (e) {
    console.log(e);
  }
};

/**
 * Controller that delete rezerwation from table public.rezerwacja
 * 
 * @param req Request with query id_rezerwacji
 * @param res Response with message: "Rezerwacja usunięcia!"
 */

export const deleteRezerwationById = async (
  req: Request<{}, {}, {}, { id_rezerwacji: string }>,
  res: Response
) => {
  try {
    const { id_rezerwacji } = req.query;

    await jedzenieRepository.delete({
      id_rezerwacji: parseInt(id_rezerwacji),
    });

    await rezerwacjaRepository.delete({
      id: parseInt(id_rezerwacji)
    });

    res.send({ message: "Rezerwacja usunięcia!" });
  } catch (e) {
    console.log(e);
  }
};
