import express, { Request, Response } from 'express';
import { indexRouter } from './routes/index';

const app = express();

// localhost:5000/
app.get('/app', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'wellcome to react chat api',
    app: 'React Chat Web App',
  });
});

app.use('/', indexRouter);

export { app };
