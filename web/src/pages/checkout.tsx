import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { useCart } from "../hooks/cart";
import { 
  CheckoutInfos, 
  CheckoutTitle, 
  Container, 
  DeliveryInfos, 
  ItemsInfos, 
  ItemsSelected,
  ItemsSelectedTitle,
  PaymentInfos
} from "./styles/checkout";

export default function Checkout() {
  const { itemsInCart } = useCart();

  return (
    <>
      <Head>
        <title>Finalizar Compra | Coffee Delivery</title>
      </Head>
      <Navbar cartItems={itemsInCart} />
      <Container>
        <CheckoutInfos>
          <CheckoutTitle>Complete seu pedido</CheckoutTitle>
          <DeliveryInfos>

          </DeliveryInfos>
          <PaymentInfos>
            
          </PaymentInfos>
        </CheckoutInfos>
        <ItemsSelected>
          <ItemsSelectedTitle>Cafés selecionados</ItemsSelectedTitle>
          <ItemsInfos>
            
          </ItemsInfos>
        </ItemsSelected>
      </Container>
    </>
  );
}