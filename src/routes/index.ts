import { Router } from 'express';
import { authRouter } from './auth';
import { userRouter } from './user';
import { productRouter } from './product';
import { jobRouter } from './job';
import { applicationRouter } from './application';

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/product', productRouter);
v1Router.use('/job', jobRouter);
v1Router.use('/application',applicationRouter);

// All routes go here

export { v1Router };
