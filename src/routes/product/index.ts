// craete router useing express router and import productController and createProduct validation

import { Router } from 'express';
import { productController } from '@controllers/index';
import { productValidations } from '@validations/product/index';
import { validateUserAccessToken } from '@middleware/index';

const productRouter = Router();

productRouter.post('/create-product', validateUserAccessToken, productValidations.createProduct, productController.saveProductHandeler);

export { productRouter };
