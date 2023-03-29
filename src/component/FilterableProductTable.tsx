import { useState } from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

import type Product from '../types/Product';
import filterProducts from '../utils/filterProducts';

type FilterableProductTableProps = {
  products: Product[];
};

export default function FilterableProductTable({
  products,
}: FilterableProductTableProps) {
  // InStockOnly가 있어야 하는 곳
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  // FilterText가 있어야 하는 곳
  const [filterText, setFilterText] = useState<string>('');

  const filteredProducts = filterProducts(products, {filterText, inStockOnly})

  return (
    <div className="filterable-product-table">
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
