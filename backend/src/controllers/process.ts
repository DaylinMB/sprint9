import { Request, Response } from 'express';
import Process from '../models/process';

export const getProcess = async (req: Request, res: Response) => {
try {
   const process = await Process.findAll();
   res.json(process);
} catch (error) {
   res.status(500).json({ msg: 'Error fetching process', error });
}
};

export const getProcessesByDuration = async (req: Request, res: Response) => {
   try {
      const process = await Process.findAll({
         where: {
            duration: req.params.duration,
        },
      });
      res.json(process);
   } catch (error) {
      res.status(500).json({ msg: 'Error fetching process', error });
   }
};

