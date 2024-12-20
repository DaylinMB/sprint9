import { Request, Response } from 'express';
import Country from '../models/country';

export const getCountries = async (req: Request, res: Response) => {
  try {
    const countries = await Country.findAll();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching countries', error });
  }
};

export const getCountryId = async (req: Request, res: Response) => {
  try {
    const country = await Country.findAll({
      where: {
        id_country: req.params.countryId,
      },
    });
    res.json(country);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching FAQs', error });
  }
};
