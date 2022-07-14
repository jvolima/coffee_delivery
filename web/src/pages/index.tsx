import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Container } from "./styles";

const items = [
  {
    id: '123',
    name: 'Expresso Tradicional',
    price: 9.90,
    image_url: '',
    quantity: 1
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Delivery</title>
      </Head>
      <Navbar cartItems={items} />
      <Container>
        
      </Container>
    </>
  )
}