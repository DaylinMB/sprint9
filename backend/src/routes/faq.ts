import { Router } from 'express';
import { getFaqs, getFaqsByProcessId, getFaqsByCountryId, getFaqsByProcessAndCountry } from '../controllers/faq';

const router = Router();

router.get('/', getFaqs);
router.get('/filter/:processId/:countryId', getFaqsByProcessAndCountry);
router.get('/process/:processId', getFaqsByProcessId);
router.get('/country/:countryId', getFaqsByCountryId);


export default router;
