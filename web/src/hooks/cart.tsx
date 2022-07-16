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

  function addItemToCart(newItem: Item) {
    const itemAlreadyInCart = itemsInCart.find(item => item.id === newItem.id);
    console.log(itemAlreadyInCart)

    if(itemAlreadyInCart) {
      const newCart = itemsInCart.filter(item => item.id !== newItem.id);
      setItemsInCart([...newCart, newItem]);
      return;
    }

    setItemsInCart(oldState => [...oldState, newItem]);
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