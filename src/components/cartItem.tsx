import Image from 'next/image'
import React from 'react'

function CartItem() {
  return (
          <div className="grid grid-cols-12 bg-gray-400 mb-4">
            <div className="col-span-10 text-right p-4">
              <h2 className="text-lg font-bold">Title</h2>
              <p>
                qty: <span>3</span>
              </p>
              <p>
                Price: <span>$</span>
              </p>
              <div className="mt-4">
                <button className="px-4 py-2 rounded bg-sky-300">+</button>
                <span className="mx-4">3</span>
                <button className="px-4 py-2 rounded bg-sky-300">-</button>
              </div>
            </div>
            <Image
              src="/img/productImg/2.webp"
              alt="moz"
              width={200}
              height={200}
              className="col-span-2"
            />
          </div>
  )
}

export default CartItem