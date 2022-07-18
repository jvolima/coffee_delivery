import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar } from "../components/Navbar";
import { useCart } from "../hooks/cart";
import { 
  Container, 
  Content, 
  OrderDetails, 
  Subtitle, 
  Title 
} from "./styles/orderCompleted";
import deliveryImage from "../../public/images/delivery.svg";
import Image from "next/image";

export default function OrderCompleted() {
  const { order } = useCart();

  console.log(order)

  return (
    <>
      <Head>
        <title>Compra finalizada | Coffee Delivery</title>
      </Head>
      <Navbar cartItems={[]}/>
      <Container>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>

        <Content>
          <OrderDetails>

          </OrderDetails>
          <Image src={deliveryImage} alt="Deliveryman image" />
        </Content>
      </Container>
    </>
  )
}