import Container from "@/src/components/Container";
import React from "react";
import Image from "next/image";
import CartItem from "@/src/components/cartItem";

function Cart() {
  return (
      <Container>
    <div>
        <h1 className="text-lg my-4">سبد خرید</h1>

        <div className="">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="border shadow p-4">
          <h3>Total Price <span>$</span></h3>
          <h3>Discount <span>%</span></h3>
          <h3>Final Price <span>$</span></h3>
          <div>
          <button className="bg-indigo-600 px-6 py-2 rounded">Submit</button>
            <input type="text" placeholder="Enter Discount" className="border ml-4" />
          </div>
        </div> 
    </div>
      </Container>
  );
}

export default Cart;
