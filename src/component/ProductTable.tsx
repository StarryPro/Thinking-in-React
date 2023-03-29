import ProductsInCategory from './ProductsInCategory';

import selectCategories from '../utils/selectCategories';

import type Product from '../types/Product';

type ProductTableProps = {
  products: Product[];
};

export default function ProductTable({ products }: ProductTableProps) {
  const categories = selectCategories(products);
  return (
    <table className='product-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <ProductsInCategory
            key={category}
            category={category}
            products={products}
          />
        ))}
      </tbody>
    </table>
  );
}
