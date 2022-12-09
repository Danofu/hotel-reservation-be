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

export const rezarwacja = async (
  req: Request<
    {},
    {},
    {
      id_pokoj: number;
      id_user: number;
      check_in: Date;
      check_out: Date;
      menu?: string;
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
      const menu = await menuRepository.findOne({
        where: {
          nazwa: req.body.menu,
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
        ilosc_osob: pokoj.kategorja.ilosc_miejsc
      });
    }

    res.send(rezerwacja);
  } catch (e) {
    console.log(e);
  }
};
