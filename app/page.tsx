import Container from "@/src/components/Container";
import ProductItem from "@/src/components/Product/ProductItem";
import Image from "next/image";

export default function Home() {
  
  return (
    <>
      <Container>
        <div className="pt-4 text-center font-bold text-3xl">Life Is a Banana </div>
        <div className="text-center font-medium text-md"><span>You'll get it soon</span></div>


      </Container>
    </>
  );
}
