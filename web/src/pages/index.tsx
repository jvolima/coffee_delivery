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
  Products, 
  ProductsList, 
  SectionTitle, 
  SubTitle, 
  Texts, 
  Title
} from "./styles/home";
import homeImage from "../../public/images/homeImage.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../hooks/cart";
import { useEffect, useState } from "react";

interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  categories: string[];
  image_url: string;
  quantity: number;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems([
      {
        id: '123',
        name: 'Expresso Tradicional',
        price: 9.90,
        description: 'O tradicional café feito com água quente e grãos moídos',
        categories: [
          'tradicional'
        ],
        image_url: 'https://static.wixstatic.com/media/13a672_3e7ab53c2de84368b95205ff4d36f273~mv2.png/v1/fill/w_196,h_194,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/caf%C3%A9.png',
        quantity: 1
      }
    ]);
  }, []);

  const { itemsInCart, addItemToCart } = useCart();

  function handleAddToCart(id: string) {
    const item = items.find(item => item.id === id) as Item;
    const itemFormatted = {
      id,
      name: item.name,
      price: item.price,
      image_url: item.image_url,
      quantity: item.quantity
    };

    addItemToCart(itemFormatted);
  }

  function handleAddQuantity(id: string) {
    const item = items.find(item => item.id === id) as Item;
    item.quantity += 1;

    const newArray = items.filter(item => item.id !== id);
    setItems([...newArray, item]);
  }

  function handleRemoveQuantity(id: string) {
    const item = items.find(item => item.id === id) as Item;
    item.quantity -= 1;

    const newArray = items.filter(item => item.id !== id);
    setItems([...newArray, item]);
  }

  return (
    <>
      <Head>
        <title>Início | Coffee Delivery</title>
      </Head>
      <Navbar cartItems={itemsInCart} />
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

        <Products>
          <SectionTitle>Nossos cafés</SectionTitle>
          <ProductsList>
            {
              items.map(item => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  name={item.name} 
                  description={item.description}
                  image_url={item.image_url}
                  price={item.price}
                  categories={item.categories}
                  handleAddToCart={() => handleAddToCart(item.id)}
                  handleAddQuantity={() => handleAddQuantity(item.id)}
                  handleRemoveQuantity={() => handleRemoveQuantity(item.id)}
                />
              ))
            }
          </ProductsList>
        </Products>
      </Container>
    </>
  )
}