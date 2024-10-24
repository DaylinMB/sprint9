import { Router } from 'express';
import { getCountries } from '../controllers/country';

const router = Router();

router.get('/', getCountries); 

export default router;