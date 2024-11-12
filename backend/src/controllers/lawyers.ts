import { Request, Response } from 'express';
import Lawyer from '../models/lawyers';

export const getLawyers= async (req: Request, res: Response) => {
  try {
    const lawyers = await Lawyer.findAll();
    res.json(lawyers);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching lawyers', error });
  }
};

// export const getCountryId = async (req: Request, res: Response) => {
//   try {
//     const country = await Lawyer.findAll({
//       where: {
//         id_country: req.params.countryId,
//       },
//     });
//     res.json(country);
//   } catch (error) {
//     res.status(500).json({ msg: 'Error fetching FAQs', error });
//   }
// };
