import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import selectProducts from '../utils/selectProducts';

import type Product from '../types/Product';

type ProductsInCategoryProps = {
  category: string;
  products: Product[];
};

export default function ProductsInCategory({
  category,
  products,
}: ProductsInCategoryProps) {
  const productInCategory = selectProducts(products, category);
  return (
    <>
      <ProductCategoryRow category={category} />
      {productInCategory.map((product) => (
        <ProductRow key={product.name} product={product} />
      ))}
    </>
  );
}
