import { Router } from 'express';
import { getProcess } from '../controllers/process';

const router = Router();

router.get('/', getProcess); 

export default router;