import Container from "@/src/components/Container";
import { IProductProps } from "@/src/components/Product/ProductItem";
import Image from "next/image";
import React from "react";


interface IDetailProductProps {
  params: Promise<{id: string}>,
  searchParams: Promise<{}>,
}

async function ProductDetail({params}: IDetailProductProps) {
  const { id } = await params
  
  const result = await fetch(`http://localhost:3004/products/${id}`)
  const data = await result.json() as IProductProps

  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md">
        <div className="col-span-9 p-4">

            <h2 className="font-bold text-2xl">{data.title}</h2>
            <p className="text-gray-500\">{data.description}</p>
        
            <p className="font-bold">Price: <span>{data.price}$</span> </p>

            <div className="mt-4">
            <button className="px-4 py-2 rounded bg-sky-300">+</button>
            <span className="mx-4">3</span>
            <button className="px-4 py-2 rounded bg-sky-300">-</button>
            </div>
        </div>

        <div className="col-span-3 bg-white">
            <Image
            src={data.image}
            alt='moz'
            width={400}
            height={500}>

            </Image>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetail;
