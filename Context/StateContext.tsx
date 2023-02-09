import { Product } from '@/typings';
import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

type Props = {
  children: ReactNode;
};

interface CartProducts {
  itemInCart: Product;
  quantity: number;
}

const Context = createContext({});

export const StateContext = ({ children }: Props) => {
  const [showCart, setCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartProducts[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);

  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems?.find(
      (item) => item.itemInCart?.product_id === product.product_id
    );
    if (checkProductInCart) {
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + product.price * quantity
      );
      setTotalQuantities(
        (prevTotalQuantities) => prevTotalQuantities + quantity
      );
      const updatedCartItems = cartItems?.map((cartProduct) => {
        if (typeof cartProduct.itemInCart?.product_id === 'string') {
          if (cartProduct.itemInCart?.product_id === product.product_id)
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
        }
      });
      setCartItems(updatedCartItems as CartProducts[]);
    } else {
      // cartProduct.quantity = quantity;
      setCartItems([...cartItems]);
    }
    toast.success(`${qty} ${product.product_name} added to the cart`);
  };

  const increaseTotalQty = () => {
    setTotalQuantities((prevQty) => prevQty + 1);
  };
  const increaseTotalPrice = () => {
    setTotalPrice((prevQty) => prevQty + 1);
  };
  // const increaseTotalItems = () => {
  //   setCartItems((prevItems) => prevItems + 1);
  // };
  const toggleCart = () => {
    setCart((prevToggle) => !prevToggle);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        increaseQty,
        decreaseQty,
        increaseTotalQty,
        increaseTotalPrice,
        // increaseTotalItems,
        toggleCart,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
