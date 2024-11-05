import { Router } from 'express';
import { getCountries, getCountryId } from '../controllers/country';

const router = Router();

router.get('/', getCountries); 
router.get('/:countryId', getCountryId);


export default router;