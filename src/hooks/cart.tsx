import { createContext, ReactNode, useContext, useState } from "react";

interface Item {
  id: string;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
}

interface OrderInfos {
  paymentMethod: 'credit-card' | 'debit-card' | 'cash';
  address: string;
  number: number;
  district: string;
  city: string;
  uf: string;
  total: number;
  items: Item[];
}

interface CartContextData {
  itemsInCart: Item[];
  order: OrderInfos;
  addItemToCart: (item: Item) => void;
  removeItem: (id: string) => void;
  finishOrder: (order: OrderInfos) => void;
  cleanCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [itemsInCart, setItemsInCart] = useState<Item[]>([]);
  const [order, setOrder] = useState<OrderInfos>({} as OrderInfos);

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

  function finishOrder(order: OrderInfos) {
    setOrder(order);
  }

  function cleanCart() {
    setItemsInCart([]);
  }

  return (
    <CartContext.Provider value={{itemsInCart, order, addItemToCart, removeItem, finishOrder, cleanCart}}>
      {children}
    </CartContext.Provider>
  )
}

function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };