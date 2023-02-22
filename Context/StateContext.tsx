import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

type Props = {
  children: ReactNode;
};

// interface CartProducts {
//   itemInCart: Product;
//   quantity: number;
// }

const Context = createContext({});

export const StateContext = ({ children }: Props) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);

  let foundProduct: { price: number; quantity: number };
  // eslint-disable-next-line no-unused-vars
  let index;

  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const onAdd = (product: any, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item: { product_id: string }) => item.product_id === product.product_id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems?.map(
        (cartProduct: { product_id: string; quantity: number }) => {
          if (typeof cartProduct.product_id === 'string') {
            if (cartProduct.product_id === product.product_id)
              return {
                ...cartProduct,
                quantity: cartProduct.quantity + quantity,
              };
          }
        }
      );
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.product_name} added to the cart`);
    console.log(cartItems);
  };

  const increaseTotalQty = () => {
    setTotalQuantities((prevQty) => prevQty + 1);
  };
  const increaseTotalPrice = () => {
    setTotalPrice((prevQty) => prevQty + 1);
  };

  const onRemove = (product: { _id: string }) => {
    foundProduct = cartItems.find(
      (item: { _id: string }) => item._id === product._id
    );
    const newCartItems = cartItems.filter(
      (item: { _id: string }) => item._id !== product._id
    );

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQty = (id: string, value: string) => {
    foundProduct = cartItems.find((item: { _id: string }) => item._id === id);
    index = cartItems.findIndex(
      (product: { _id: string }) => product._id === id
    );
    const newCartItems = cartItems.filter(
      (item: { _id: string }) => item._id !== id
    );

    if (value === 'inc') {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
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
        toggleCartItemQty,
        onAdd,
        setShowCart,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
