import { createContext, ReactNode, useContext, useState } from "react";

interface Item {
  id: string;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
}

interface CartContextData {
  itemsInCart: Item[];
  addItemToCart: (item: Item) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [itemsInCart, setItemsInCart] = useState<Item[]>([]);

  function addItemToCart(item: Item) {
    setItemsInCart(oldState => [...oldState, item]);
  }

  return (
    <CartContext.Provider value={{itemsInCart, addItemToCart}}>
      {children}
    </CartContext.Provider>
  )
}

function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };