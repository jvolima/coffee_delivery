import Image from "next/image";
import { 
  AddButton,
  Cart,
  CartAndQuantity,
  Categories, 
  Category, 
  Container, 
  ContainerImage, 
  Description, 
  Price, 
  PriceAndCartContainer, 
  Quantity, 
  QuantityContainer, 
  RemoveButton, 
  Sign, 
  Title 
} from "./styles";
import coffeeImage from "../../../public/images/coffeeImage.png"
import { ShoppingCart, Minus, Plus } from "phosphor-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  categories: string[];
  image_url: string;
}

export function ProductCard({ id, name, description, price, categories, image_url }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  function handleRemoveProduct() {
    if(quantity > 1) {
      setQuantity(oldState => oldState - 1);
    }
  }

  function handleAddProduct() {
    setQuantity(oldState => oldState + 1);
  }

  return (
    <Container>
      <ContainerImage>
        <Image 
          src={coffeeImage} 
          width={120} 
          height={120} 
          alt="Product image" 
        />
      </ContainerImage>

      <Categories>
        {
          categories.map(category => (
            <Category key={category}>{category}</Category>
          ))
        }
      </Categories>

      <Title>{name}</Title>
      <Description>{description}</Description>

      <PriceAndCartContainer>
        <Price>
          <Sign>R$ </Sign>
          {price.toFixed(2)}
        </Price>
        <CartAndQuantity>
          <QuantityContainer>
            <RemoveButton onClick={handleRemoveProduct}>
              <Minus size={14} weight="bold" color="#8047F8" />
            </RemoveButton>
            <Quantity>{quantity}</Quantity>
            <AddButton onClick={handleAddProduct}>
              <Plus size={14} weight="bold" color="#8047F8" />
            </AddButton>
          </QuantityContainer>
          <Cart>
            <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
          </Cart>
        </CartAndQuantity>
      </PriceAndCartContainer>
    </Container>
  )
}