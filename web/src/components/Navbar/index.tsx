import Image from "next/image";
import { 
  CartButton,
  CoffeeLocation,
  CoffeeLocationText,
  Container, 
  ItemsInCart, 
  LogoButton, 
  NavbarContent 
} from "./styles";
import logo from "../../../public/images/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";
import { useRouter } from "next/router";

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
  const router = useRouter();

  function handleGoToCheckout() {
    router.push('/checkout');
  }

  function handleBackToHome() {
    router.push('/');
  }

  return (
    <Container>
      <LogoButton onClick={handleBackToHome}>
        <Image src={logo} alt="Logo" />
      </LogoButton>
      <NavbarContent>
        <CoffeeLocation>
          <MapPin size={22} weight='fill' color='#8047FB' />
          <CoffeeLocationText>Goioerê, PR</CoffeeLocationText>
        </CoffeeLocation>

        <CartButton onClick={handleGoToCheckout}>
          { cartItems.length > 0 && <ItemsInCart>{cartItems.length}</ItemsInCart> }
          <ShoppingCart size={22} weight='fill' color='#C47F17' />
        </CartButton>
      </NavbarContent>
    </Container>
  );
}