import { useStateContext } from '@/Context/StateContext';
import Image from 'next/image';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { IconContext } from 'react-icons';
import {
  AiOutlineCloseCircle,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from 'react-icons/ai';

function Cart() {
  const cartRef = useRef<any>();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQty,
    onRemove,
  }: any = useStateContext();

  const handleCheckout = async () => {
    // const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.status === 500) return;

    // const data = await response.json();

    toast.loading('Redirecting...');

    // return stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div
      className="bg-white rounded-xl mobile:w-[370px] absolute z-10 top-5 right-1"
      ref={cartRef}
    >
      <div className="h-auto p-6">
        <button type="button" onClick={() => setShowCart(false)}>
          CLOSE
        </button>
        <div className=" grid grid-cols-1 gap-6">
          {/* CART HEADER */}
          <div className="inline-flex justify-between">
            <h6 className="text-black font-semibold">
              CART: ({totalQuantities}) items
            </h6>
            {/* <span className="text-black/50">Remove all</span> */}
          </div>

          {/* CART BODY */}
          <div id="items" className="grid grid-cols-1 gap-2">
            {cartItems.length >= 1 &&
              cartItems.map((item: any) => (
                <div
                  key={item.product_id}
                  className="grid grid-cols-4 justify-between items-center gap-8"
                >
                  <picture className="relative w-16 h-16 overflow-hidden rounded-xl mr-4">
                    <Image
                      className="absolute object-cover"
                      src={item.cart_image.secure_url}
                      alt=""
                      fill
                    />
                  </picture>
                  <div className="grid grid-cols-1">
                    <p className="text-black">{item.product_name}</p>
                    <p className="text-black/50">${item.price}</p>
                  </div>
                  <div className="bg-grey h-12 w-24 p-4 inline-flex justify-between mx-4">
                    <span
                      className="hover:text-black"
                      onClick={() => toggleCartItemQty(item._id, 'dec')}
                    >
                      <AiOutlineMinus />
                    </span>
                    <span className="text-black">{item.quantity}</span>
                    <span
                      className="hover:text-black"
                      onClick={() => toggleCartItemQty(item._id, 'inc')}
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <button
                    type="button"
                    className="mx-8"
                    onClick={() => onRemove(item)}
                  >
                    <IconContext.Provider value={{ color: 'red' }}>
                      <span>
                        <AiOutlineCloseCircle />
                      </span>
                    </IconContext.Provider>
                  </button>
                </div>
              ))}

            {/* CART FOOTER */}
            <div className="inline-flex justify-between">
              <span className="text-black/50">SUBTOTAL</span>
              <span className="text-black">${totalPrice}</span>
            </div>
            <div>
              <button
                onClick={handleCheckout}
                type="button"
                className="w-full h-12 text-sub-title font-medium text-white bg-caramel hover:bg-nude"
              >
                Pay With Stripe
              </button>
            </div>
          </div>
        </div>
        {cartItems.length < 1 && (
          <div className="flex flex-col">
            <AiOutlineShopping className="mx-auto" size={150} />
            <h3 className="mx-auto">Your Shopping cart is empty</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
