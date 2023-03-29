import type Product from "../types/Product"

type ProductRowProps = {
  product: Product
}

export default function ProductRow({product}: ProductRowProps){
  return(
      <tr>
          <th>{product.name}</th>
          <th>{product.price}</th>
      </tr>
)}