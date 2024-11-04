import { Router } from 'express';
import { getFaqs, getFaqsByProcessId } from '../controllers/faq';

const router = Router();

router.get('/', getFaqs);
router.get('/:processId', getFaqsByProcessId);

export default router;
