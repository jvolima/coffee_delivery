import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar } from "../components/Navbar";
import { useCart } from "../hooks/cart";
import { 
  Container, 
  Content, 
  IconCircle, 
  Info, 
  InfoDescription, 
  Infos, 
  InfoTitle, 
  OrderDetails, 
  Subtitle, 
  Texts, 
  Title 
} from "./styles/orderCompleted";
import deliveryImage from "../../public/images/delivery.svg";
import Image from "next/image";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export default function OrderCompleted() {
  const { order } = useCart();

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
            <Infos>
              <Info>
                <IconCircle color="#8047F8">
                  <MapPin size={16} weight="fill" color="#FAFAFA" />
                </IconCircle>
                <InfoTitle>
                  Entrega em <b>{order.address}, {order.number}</b> <br/> {order.district} - {order.city}, {order.uf}
                </InfoTitle>
              </Info>

              <Info>
                <IconCircle color="#DBAC2C">
                  <Timer size={16} weight="fill" color="#FAFAFA" />
                </IconCircle>
                <Texts>
                  <InfoTitle>Previsão de entrega</InfoTitle>
                  <InfoDescription>20 min - 30 min</InfoDescription>
                </Texts>
              </Info>

              <Info>
                <IconCircle color="#C47F17">
                  <CurrencyDollar size={16} weight="fill" color="#FAFAFA" />
                </IconCircle>
                <Texts>
                  <InfoTitle>Pagamento na entrega</InfoTitle>
                  <InfoDescription>
                    { 
                      order.paymentMethod === "credit-card" ? "Cartão de Crédito" 
                      : order.paymentMethod === "debit-card" ? "Cartão de Débito" 
                      : "Dinheiro" 
                    }
                  </InfoDescription>
                </Texts>
              </Info>
            </Infos>
          </OrderDetails>
          <Image src={deliveryImage} alt="Deliveryman image" />
        </Content>
      </Container>
    </>
  )
}