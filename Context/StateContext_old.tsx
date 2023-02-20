import { createContext, ReactNode, useContext, useState } from 'react';

type Props = {
  children: ReactNode;
};

type CartItem = {
  id: string;
  quantity: number;
};

type ShoppingCartContext = {
  // eslint-disable-next-line no-unused-vars
  getItemQty: (id: string) => number;
  // eslint-disable-next-line no-unused-vars
  increaseCartQty: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  decreaseCartQty: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  removeFromCart: (id: string) => void;
  decreaseQty: () => void;
  increaseQty: () => void;
  openCart: () => void;
  closeCart: () => void;
  cartQty: number;
  cartItems: CartItem[];
  qty: number;
  totalPrice: number;
  totalQuantities: number;
  setShowCart: any;
  showCart: any;
};

const Context = createContext({} as ShoppingCartContext);

export const StateContext = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [qty, setQty] = useState<number>(1);
  // const [totalPrice, setTotalPrice] = useState<number>(0);
  // const [totalQuantities, setTotalQuantities] = useState<number>(0);
  // eslint-disable-next-line no-unused-vars
  const [showCart, setShowCart] = useState<boolean>(false);

  const cartQty = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  function getItemQty(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQty(id: string) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQty(id: string) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: string) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  // const onAdd = (product: Product, quantity: number) => {
  //   const checkProductInCart =
  //     cartItems.find((item) => item.id === product._id) || false;

  //   setTotalPrice(
  //     (prevTotalPrice) => prevTotalPrice + product.price * quantity
  //   );
  //   setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

  //   if (checkProductInCart) {
  //     const updatedCartItems = cartItems.map((cartProduct) => {
  //       if (cartProduct.id === product._id)
  //         return {
  //           ...cartProduct,
  //           quantity: cartProduct.quantity + quantity,
  //         };
  //     });

  //     setCartItems(updatedCartItems as CartItem[]);
  //     toast.success(`${qty} ${product.product_name} added to the cart.`);
  //   } else {
  //     setCartItems([...cartItems, { ...product }]);
  //   }
  // };

  return (
    <Context.Provider
      value={{
        qty,
        getItemQty,
        increaseQty,
        decreaseQty,
        increaseCartQty,
        decreaseCartQty,
        removeFromCart,
        cartItems,
        openCart,
        closeCart,
        cartQty,
        totalPrice,
        totalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
