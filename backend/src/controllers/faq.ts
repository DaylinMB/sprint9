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
