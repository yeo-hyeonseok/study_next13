"use client";

import { productStore } from "../src/store";
import ProductItem from "../src/components/products/productItem";

export default function List() {
  var { productList } = productStore();

  return (
    <div className="flex items-center justify-center flex-col pt-15 pb-15">
      {productList.map((product, _) => (
        <ProductItem
          key={product.id}
          id={product.id}
          className="mt-10"
          name={product.name}
          company={product.company}
          price={product.price}
        />
      ))}
    </div>
  );
}
