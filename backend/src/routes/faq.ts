import { Router } from 'express';
import { getFaqs } from '../controllers/faq';

const router = Router();

router.get('/', getFaqs);

export default router;
