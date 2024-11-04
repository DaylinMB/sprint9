import { Router } from 'express';
import { getProcess, getProcessesByDuration } from '../controllers/process';

const router = Router();

router.get('/', getProcess); 
router.get('/:duration', getProcessesByDuration);


export default router;