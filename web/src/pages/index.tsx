import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { 
  AboutContainer, 
  Benefit, 
  BenefitIconCircle, 
  Benefits, 
  BenefitText, 
  Container, 
  SubTitle, 
  Texts, 
  Title
} from "./styles/home";
import homeImage from "../../public/images/homeImage.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

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
        <AboutContainer>
          <Texts>
            <Title>Encontre o café perfeito <br/> para qualquer hora do dia</Title>
            <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a <br/> qualquer hora</SubTitle>
            <Benefits>
              <Benefit>
                <BenefitIconCircle circleColor="#C47F17">
                  <ShoppingCart size={16} weight="fill" color="#FFFFFF" />
                </BenefitIconCircle>
                <BenefitText>Compra simples e segura</BenefitText>
              </Benefit>
              <Benefit>
                <BenefitIconCircle circleColor="#574F4D">
                  <Package size={16} weight="fill" color="#FFFFFF" />
                </BenefitIconCircle>
                <BenefitText>Embalagem mantém o café intacto</BenefitText>
              </Benefit>
            </Benefits>

            <Benefits style={{ marginTop: 20 }}>
              <Benefit>
                <BenefitIconCircle circleColor="#DBAC2C">
                  <Timer size={16} weight="fill" color="#FFFFFF" />
                </BenefitIconCircle>
                <BenefitText>Entrega rápida e rastreada</BenefitText>
              </Benefit>
              <Benefit>
                <BenefitIconCircle circleColor="#8047F8">
                  <Coffee size={16} weight="fill" color="#FFFFFF" />
                </BenefitIconCircle>
                <BenefitText>O café chega fresquinho até você</BenefitText>
              </Benefit>
            </Benefits>
          </Texts>
          <Image src={homeImage} alt="Coffee image"/>
        </AboutContainer>
      </Container>
    </>
  )
}