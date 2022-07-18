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
  removeItem: (id: string) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [itemsInCart, setItemsInCart] = useState<Item[]>([]);

  function addItemToCart(newItem: Item) {
    const itemAlreadyInCart = itemsInCart.find(item => item.id === newItem.id);

    if(itemAlreadyInCart) {
      const itemIndex = itemsInCart.indexOf(itemAlreadyInCart);
      const newCart = [...itemsInCart];
      newCart[itemIndex].quantity = newItem.quantity;
      
      setItemsInCart([...newCart]);
      return;
    }

    setItemsInCart(oldState => [...oldState, newItem]);
  }

  function removeItem(id: string) {
    const newCart = itemsInCart.filter(item => item.id !== id);
    setItemsInCart([...newCart]);
  }

  return (
    <CartContext.Provider value={{itemsInCart, addItemToCart, removeItem}}>
      {children}
    </CartContext.Provider>
  )
}

function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };