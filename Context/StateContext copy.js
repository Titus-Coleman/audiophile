import { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

// interface CartContextType {
//   showCart: boolean;
//   cartItems: number;
//   totalPrice: number;
//   totalQuantities: number;
//   qty: number;

// }

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const onAdd = ({ product }, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    if (checkProductInCart) {
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + product.price * quantity
      );
      setTotalQuantities(
        (prevTotalQuantities) => prevTotalQuantities + quantity
      );
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart`);
  };

  const increaseTotalQty = () => {
    setTotalQuantities((prevQty) => prevQty + 1);
  };
  const increaseTotalPrice = () => {
    setTotalPrice((prevQty) => prevQty + 1);
  };
  const increaseTotalItems = () => {
    setCartItems((prevItems) => prevItems + 1);
  };
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
        increaseTotalItems,
        toggleCart,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
