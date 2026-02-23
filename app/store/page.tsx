import Container from "@/src/components/Container";
import ProductItem, { IProductProps } from "@/src/components/Product/ProductItem";
import Link from "next/link";
import React from "react";

async function Store() {
  const result = await fetch('http://localhost:3004/products')

  const data = await result.json() as IProductProps[]
  return (
    <Container>
      <div>Store</div>
      <div className="grid grid-cols-4 gap-4">
        {
          data.map((item) => (
            <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem {...item}/>
            </Link>
          ))
        }
      </div>
    </Container>
  );
}

export default Store;
