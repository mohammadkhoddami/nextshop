import Image from 'next/image'
import React from 'react'


export interface IProductProps {
          id: string,
      image: string,
      title: string,
      description: string,
      price: string
}

function ProductItem(props: IProductProps) {
  return (
          <div className="shadow-md shadow-white">
            <Image
              src={props.image}
              alt="moz"
              width={250}
              height={250}
            />

            <div className="flex flex-col p-2">
              <h2 className="text-xl font-black">{props.title}</h2>
              <p>
                Price
                <span> {props.price} $ </span>
              </p>
            </div>
          </div>  )
}

export default ProductItem