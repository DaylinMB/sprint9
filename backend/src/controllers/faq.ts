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