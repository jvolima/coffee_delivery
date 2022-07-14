import Image from "next/image";
import { 
  CartButton,
  CoffeeLocation,
  CoffeeLocationText,
  Container, 
  ItemsInCart, 
  NavbarContent 
} from "./styles";
import logo from "../../../public/images/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";

interface Item {
  id: string;
  name: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface NavbarProps {
  cartItems: Item[];
}

export function Navbar({ cartItems }: NavbarProps) {
  return (
    <Container>
      <Image src={logo} alt="Logo" />
      <NavbarContent>
        <CoffeeLocation>
          <MapPin size={22} weight='fill' color='#8047FB' />
          <CoffeeLocationText>Goioerê, PR</CoffeeLocationText>
        </CoffeeLocation>

        <CartButton>
          { cartItems.length > 0 && <ItemsInCart>{cartItems.length}</ItemsInCart> }
          <ShoppingCart size={22} weight='fill' color='#C47F17' />
        </CartButton>
      </NavbarContent>
    </Container>
  );
}