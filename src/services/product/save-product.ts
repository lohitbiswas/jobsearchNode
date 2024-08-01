import { ICreateProductRequest, IProduct } from '@modules/product/model';
import productModel from '@modules/product/schema';
/**
 * Save new user into db
 * @param prodDetails
 */
export const saveProduct = async (prodDetails: ICreateProductRequest): Promise<IProduct> => {
  const newProduct: IProduct = new productModel({
    name: prodDetails.name,
    description: prodDetails.description,
    creater: prodDetails.creater,
  });

  await newProduct.save();
  return newProduct;
};
