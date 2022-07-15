import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { useCart } from "../hooks/cart";
import { Container } from "./styles/checkout";

export default function Checkout() {
  const { itemsInCart } = useCart();

  return (
    <>
      <Head>
        <title>Coffee Delivery</title>
      </Head>
      <Navbar cartItems={itemsInCart} />
      <Container>
        
      </Container>
    </>
  );
}