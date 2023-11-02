import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/current-user', (req: Request, res: Response) => {
  return res.status(200).send('Abhay Singh');
});

export { router as currentUserRouter };
