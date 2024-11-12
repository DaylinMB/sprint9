import { Router } from 'express';
import { getLawyers } from '../controllers/lawyers';

const router = Router();

router.get('/', getLawyers); 
// router.get('/:lawyerId', getCountryId);


export default router;