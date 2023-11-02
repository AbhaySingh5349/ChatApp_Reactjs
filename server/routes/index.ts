import express from 'express';

import { currentUserRouter } from './current-user';

const router = express.Router();

router.use('/users', currentUserRouter);

export { router as indexRouter };
