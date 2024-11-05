import { Request, Response } from 'express';
import Faq from '../models/faq';

export const getFaqs = async (req: Request, res: Response) => {
  try {
    const faqs = await Faq.findAll();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching FAQs', error });
  }
};

export const getFaqsByProcessAndCountry = async (req: Request, res: Response) => {
    try {
      const { processId, countryId } = req.params;
      const faqs = await Faq.findAll({
        where: {
          process_id: processId,
          country_id: countryId,
        },
      });
  
      if (faqs.length === 0) {
        return res.status(404).json({ msg: 'No FAQs found for the given process and country' });
      }
  
      res.json(faqs);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      res.status(500).json({ msg: 'Error fetching FAQs', error });
    }
};
  
  

export const getFaqsByProcessId = async (req: Request, res: Response) => {
  try {
    const faqs = await Faq.findAll({
      where: {
        process_id: req.params.processId,
      },
    });
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching FAQs', error });
  }
};

export const getFaqsByCountryId = async (req: Request, res: Response) => {
    try {
      const faqs = await Faq.findAll({
        where: {
          country_id: req.params.countryId,
        },
      });
      res.json(faqs);
    } catch (error) {
      res.status(500).json({ msg: 'Error fetching FAQs', error });
    }
  };
